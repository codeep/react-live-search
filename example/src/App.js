import React, { Component } from 'react'

import ReactLiveSearch from 'react-search-input'

export default class App extends Component {
  state = {
    inputValue: '',
    data: [
      'test',
      'work',
      'great'
    ]
  };

  onValueChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render () {
    const { inputValue, data } = this.state
    return (
      <div>
        <ReactLiveSearch value={inputValue} onValueChange={this.onValueChange} list={data} />
      </div>
    )
  }
}
