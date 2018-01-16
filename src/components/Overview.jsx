import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const OverviewTable = styled.table`
  grid-column: 4/10;
  width: 100%;
`

const Item = styled.tr`
  cursor: pointer;
  height: 32px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`

export default class Overview extends React.Component {
  static propTypes = {
    fetchItems: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchItems()
  }

  render() {
    if (this.props.loading) return <p>Loading</p>
    else if (this.props.error) return <p>Error</p>
    else
      return (
        <OverviewTable>
          <thead>
            <tr style={{ height: "24px", textAlign: "left" }}>
              <th>Item</th>
            </tr>
          </thead>

          <tbody>
            {this.props.data.map((item, index) => (
              <Item
                key={`item-${item.id}`}
                onClick={() => this.props.navigate(item.id)}
              >
                <td>{item.name}</td>
              </Item>
            ))}
          </tbody>
        </OverviewTable>
      )
  }
}
