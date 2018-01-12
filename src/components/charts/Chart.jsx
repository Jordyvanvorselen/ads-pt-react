import PropTypes from "prop-types"
import React from "react"

const Chart = ({ children, margin, height, width }) => (
  <svg width={width} height={height}>
    <g transform={`translate(${margin.left}, ${margin.top})`}>{children}</g>
  </svg>
)

Chart.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired),
  margin: PropTypes.shape({
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
  }),
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default Chart
