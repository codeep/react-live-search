import styled from 'styled-components'

const LiveSearch = styled.div`
  position: relative;
  width: 280px;
`

const Input = styled.input`
  height: 40px;
  color: #333;
  font-size: 16px;
  padding: 5px;
  border: 1px solid #dedede;
  border-radius: 3px;
  box-sizing: border-box;
  outline: 0;
  border: 0;
`

const Items = styled.ul`
  width: 280px;
  max-height: 200px;
  border: 1px solid #dedede;
  border-radius: 3px;
  box-sizing: border-box;
  overflow-y: auto;
  position: absolute;
  padding: 0;
  margin: 0;
`

const Item = styled.li`
  background: ${props => (props.active ? '#e8ebef' : '#fff')};
  padding: 10px;
  cursor: pointer;
  list-style-type: none

  :hover {
    background: #e8ebef !important;
  }
`

LiveSearch.Input = Input
LiveSearch.Items = Items
LiveSearch.Item = Item

export default LiveSearch
