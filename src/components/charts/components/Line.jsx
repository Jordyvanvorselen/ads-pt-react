import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const LineWrapper = styled.path`
  fill: none;
  stroke: ${props => props.color || "steelblue"};
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke-width: 1.5;
`

const Line = ({ color, data, line }) => (
  <LineWrapper color={color} d={line(data)} />
)

Line.propTypes = {
  color: PropTypes.string,
  data: PropTypes.any,
  line: PropTypes.func.isRequired
}

export default Line
