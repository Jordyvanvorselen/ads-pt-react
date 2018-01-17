import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Item = styled.tr`
  cursor: pointer;
  height: 32px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.04);
  }
`

export default class ItemList extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.any).isRequired,
    orderedBy: PropTypes.any.isRequired,
    navigate: PropTypes.func.isRequired,
    title: PropTypes.any
  }

  constructor(props) {
    super(props)
    this.state = {
      orderedItems: []
    }
  }

  componentDidMount() {
    if (this.props.data && this.props.orderedBy) {
      let itemsToOrder = []
      this.props.data.forEach(item => {
        if (item.rsbuddy.length) {
          itemsToOrder.push(item)
        }
      })
      this.setState({ orderedItems: itemsToOrder.sort(this.order.bind(this)) })
    }
  }

  order(a, b) {
    return (
      b.rsbuddy[0][this.props.orderedBy] - a.rsbuddy[0][this.props.orderedBy]
    )
  }

  render() {
    return (
      <table class="item-list" style={this.props.style}>
        <thead style={{ display: "block" }}>
          <tr style={{ height: "24px" }}>
            <th>{this.props.title}</th>
            <th>{this.props.orderedBy}</th>
          </tr>
        </thead>

        <tbody
          style={{
            height: "500px",
            overflowY: "auto",
            overflowX: "hidden",
            display: "block"
          }}
        >
          {this.state.orderedItems.map((item, index) => (
            <Item
              key={`item-${item.id}`}
              onClick={() => this.props.navigate(item.id)}
            >
              <td style={{ width: "100%" }}>{item.name}</td>
              <td style={{ width: "100%" }}>
                {parseInt(item.rsbuddy[0][this.props.orderedBy], 10)}
              </td>
            </Item>
          ))}
        </tbody>
      </table>
    )
  }
}
