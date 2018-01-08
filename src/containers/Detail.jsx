import { default as DetailComponent } from "../components/Detail"
import { connect } from "react-redux"
import { fetchRsBuddy } from "../actions/rsbuddy"

const mapStateToProps = state => ({
  ...state.rsbuddy
})

const mapDispatchToProps = {
  fetchRsBuddy
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailComponent)
