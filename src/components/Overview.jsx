import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import ItemList from "./ItemList"
import Content from "./Content"
import Searchbar from "./Searchbar"

const ContentGap = styled(Content)`
  grid-column-gap: 40px;
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
        <ContentGap>
          <Searchbar
            style={{ gridRow: "1", gridColumn: "3/11" }}
            data={this.props.data}
            navigate={this.props.navigate}
          />
          <ItemList
            style={{
              gridRow: "2",
              gridColumn: "3/7",
              height: "500px",
              width: "100%"
            }}
            data={this.props.data}
            orderedBy={"sellingCompleted"}
            navigate={this.props.navigate}
            title="Top selling today"
          />

          <ItemList
            style={{
              gridRow: "2",
              gridColumn: "7/11",
              height: "500px",
              width: "100%"
            }}
            data={this.props.data}
            orderedBy={"sellingPrice"}
            navigate={this.props.navigate}
            title="Most expensive today"
          />
        </ContentGap>
      )
  }
}
