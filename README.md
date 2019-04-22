# react-live-search

## Install

```bash
npm install --save react-live-search
```

## Usage

```jsx
import React, { Component } from 'react'

import ReactLiveSearch from 'react-live-search'

class Example extends Component {
  state = {
    value: '',
    data: [
      { label: 'test', value: 1 },
      { label: 'work', value: 2 },
      { label: 'great', value: 3 },
      { label: 'bar', value: 4 },
      { label: 'foo', value: 5 }
    ]
  };
  
  onChange = value => {
    this.setState({
      value
    });
  };
  
  onSelect = v => {};


  render () {
    return (
      <ReactLiveSearch
                value={value}
                onChange={this.onChange}
                onSelect={this.onSelect}
                data={data}
              />
    )
  }
}
```
| Props  | Required/optional | Description | Type
| ------------- | ------------- | ----------- | --------
| value  | Required  | Search term | String
| data | Required | Data for search (should be  an array of objects with label, value properties) | Array
| onChange  | Optional  | Handle input change | Function
| onSelect | Optional | Handle input data selection | Function
| itemStyle | Optional | Item styles| Object
 

## License

MIT © [codeep team](https://github.com/codeep)
