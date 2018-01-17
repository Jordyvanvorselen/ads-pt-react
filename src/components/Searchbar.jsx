import React from "react"
import PropTypes from "prop-types"
import AutoComplete from "react-autocomplete"

export default class Searchbar extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.any).isRequired,
    navigate: PropTypes.func.isRequired,
    style: PropTypes.object
  }

  constructor() {
    super()
    this.state = {
      allItems: [],
      value: ""
    }
  }

  componentWillMount() {
    if (this.props.data) {
      let items = []
      this.props.data.forEach(item => {
        items.push(item.name)
      })
      this.setState({ allItems: items })
    }
  }

  render() {
    return (
      <div
        style={{ ...this.props.style, display: "block" }}
        className="searchbar"
      >
        <AutoComplete
          inputProps={{ placeholder: "Search for items..." }}
          style={{ width: "100%" }}
          getItemValue={item => item}
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          onSelect={(_, item) => {
            let id = this.props.data.filter(i => i.name === item)[0].id
            this.props.navigate(id)
          }}
          items={this.state.allItems}
          renderItem={(item, isHighlighted) => (
            <div
              style={{
                width: "100%",
                background: isHighlighted ? "lightgray" : "white"
              }}
            >
              {item}
            </div>
          )}
          shouldItemRender={(item, value) =>
            value !== "" && item.toUpperCase().includes(value.toUpperCase())
          }
        />
      </div>
    )
  }
}
