import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import LiveSearch from './LiveSearch'

library.add(fab, fas, far)

export default class ReactLiveSearch extends Component {
  static propTypes = {
    value: PropTypes.string,
    data: PropTypes.array,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    itemStyle: PropTypes.object,
    icon: PropTypes.string
  }

  static defaultProps = {
    itemStyle: {},
    icon: 'search',
    onChange: () => {}
  }

  state = {
    selected: false,
    cursor: 0
  }

  handleValueChange = value => {
    const { onChange } = this.props

    onChange(value)
    this.setState({ selected: false })
  }

  handleItemSelect = value => {
    const { data, onSelect } = this.props
    const selected = true

    this.handleValueChange(data.find(item => item.value === value)['label'])
    this.setState({ selected })
    onSelect(selected)
  }

  handleKeyDown = e => {
    const { cursor } = this.state
    const { length } = this.filteredData

    switch (e.key) {
      case 'ArrowDown':
        this.setState({
          cursor: cursor < length - 1 ? cursor + 1 : 0
        })
        break
      case 'ArrowUp':
        this.setState({
          cursor: cursor > 0 ? cursor - 1 : length - 1
        })
        break
      case 'Enter':
        this.handleItemSelect(this.filteredData[cursor].value)
        this.setState({ cursor: 0 })
    }
  }

  render() {
    const { value, data, itemStyle, icon } = this.props
    const { selected, cursor } = this.state

    this.filteredData = data.filter(item => item.label.includes(value))

    return (
      <LiveSearch>
        <div style={{ border: '1px solid black' }}>
          <FontAwesomeIcon
            icon='search'
            style={{ marginLeft: '10px', marginRight: '10px' }}
          />
          <LiveSearch.Input
            type='text'
            value={value}
            onChange={e => this.handleValueChange(e.target.value)}
            onKeyDown={this.handleKeyDown}
          />
        </div>
        {!!value && !!this.filteredData.length && !selected && (
          <LiveSearch.Items>
            {this.filteredData.map((item, index) => (
              <LiveSearch.Item
                key={item.value}
                style={itemStyle}
                onClick={() => this.handleItemSelect(item.value)}
                active={cursor === index}
              >
                {item.label}
              </LiveSearch.Item>
            ))}
          </LiveSearch.Items>
        )}
      </LiveSearch>
    )
  }
}
