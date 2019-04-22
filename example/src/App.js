import React, { Component } from 'react';

import ReactLiveSearch from 'react-live-search'

export default class App extends Component {
  state = {
    value: '',
    data: [
      { label: 'test', value: 1 },
      { label: 'work', value: 2 },
      { label: 'great', value: 3 },
      { label: 'bla', value: 4 },
      { label: 'aaa', value: 5 }
    ]
  };

  onChange = value => {
    this.setState({
      value
    });
  };

  onSelect = v => {};

  render() {
    const { value, data } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh'
        }}
      >
        <ReactLiveSearch
          value={value}
          onChange={this.onChange}
          onSelect={this.onSelect}
          data={data}
          itemStyle={{background: 'grey'}} />
      </div>
    )
  }
}
