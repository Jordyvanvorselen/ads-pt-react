import PropTypes from "prop-types"
import React from "react"

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
        <table>
          <tbody>
            {this.props.data.map((item, index) => (
              <tr
                key={`item-${item.id}`}
                onClick={() => this.props.navigate(item.id)}
              >
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )
  }
}
