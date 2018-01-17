import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import ItemList from "./ItemList"
import { navigateDetail } from "../actions/navigation";

const OverviewTable = styled.table`
  grid-column: 4/10;
  width: 100%;
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
        <div>
          <ItemList
            data={this.props.data}
            orderedBy={"sellingCompleted"}
            navigate={this.props.navigate}
            title="Top selling today" />

          <ItemList
            data={this.props.data}
            orderedBy={"sellingPrice"}
            navigate={this.props.navigate}
            title="Most expensive today" />
        </div>
      )
  }
}
