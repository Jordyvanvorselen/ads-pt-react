import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const LineWrapper = styled.path`
  fill: none;
  stroke: steelblue;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke-width: 1.5;
`

const Line = ({ data, line }) => <LineWrapper d={line(data)} />

Line.propTypes = {
  data: PropTypes.any,
  line: PropTypes.func.isRequired
}

export default Line
