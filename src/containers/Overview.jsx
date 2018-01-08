import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { fetchItems } from "../actions/items"

class Overview extends React.Component {
  static propTypes = {
    fetchItems: PropTypes.func.isRequired
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
              <tr key={`item-${item.id}`}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )
  }
}

const mapStateToProps = state => ({
  ...state.items
})

const mapDispatchToProps = {
  fetchItems: fetchItems
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview)
