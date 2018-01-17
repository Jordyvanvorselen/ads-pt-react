import PropTypes from "prop-types"
import React from "react"
import ItemList from "./ItemList"
import Content from "./Content";
import Searchbar from "./Searchbar";

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
        <Content>
          <Searchbar data={this.props.data} navigate={this.props.navigate} />
          <ItemList
            style={{ gridColumn: "3/6", height: "500px", width: "100%" }}
            data={this.props.data}
            orderedBy={"sellingCompleted"}
            navigate={this.props.navigate}
            title="Top selling today" />

          <ItemList
            style={{ gridColumn: "8/11", height: "500px", width: "100%" }}
            data={this.props.data}
            orderedBy={"sellingPrice"}
            navigate={this.props.navigate}
            title="Most expensive today" />
        </Content>
      )
  }
}
