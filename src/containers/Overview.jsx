import { default as OverviewComponent } from "../components/Overview"
import { connect } from "react-redux"
import { fetchItems } from "../actions/items"
import { push } from "react-router-redux"

const mapStateToProps = state => ({
  ...state.items
})

const mapDispatchToProps = {
  fetchItems: fetchItems,
  navigate: id => push(`/detail?id=${id}`)
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewComponent)
