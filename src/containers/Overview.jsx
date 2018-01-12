import { default as OverviewComponent } from "../components/Overview"
import { connect } from "react-redux"
import { fetchItems } from "../actions/items"
import { navigateDetail } from "../actions/navigation"

const mapStateToProps = state => ({
  ...state.items
})

const mapDispatchToProps = {
  fetchItems,
  navigate: navigateDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewComponent)
