import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"

const Mentions = ({ data, loading, error }) => (
  <div className="reddit-mentions-amount">
    {(() => {
      if (loading) return "Loading Reddit mentions..."
      if (error) return "Error"
      else return `This item was mentioned ${data} times the past month.`
    })()}
  </div>
)

Mentions.propTypes = {
  data: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  ...state.mentions
})

export default connect(mapStateToProps)(Mentions)
