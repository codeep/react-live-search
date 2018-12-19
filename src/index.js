import React, {Component} from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ReactLiveSearch extends Component {
  static propTypes = {
    value: PropTypes.string,
    list: PropTypes.array,
    onValueChange: PropTypes.func
  }

  generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`
  }

  render() {
    const {value, onValueChange, list} = this.props

    const filteredList = list.filter(
      item => item.includes(value)
    )

    const listItems = filteredList.map((item) =>
      <div key={this.generateKey(item)} className={styles['search-result']}>{item}</div>
    )

    return (
      <div>
        <input type='text' value={value} onChange={onValueChange} />
        <div id={styles['search-results']}>
          {value && listItems}
        </div>
      </div>
    )
  }
}
