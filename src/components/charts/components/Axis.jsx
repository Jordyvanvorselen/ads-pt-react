import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { select } from "d3"

const AxisWrapper = styled.g`
  font-size: ${props => props.fontSize};
`

const Axis = ({ type, axis, children, transform }) => (
  <AxisWrapper
    className={`axis ${type}`}
    innerRef={node => select(node).call(axis)}
    transform={transform}
  >
    {children}
  </AxisWrapper>
)

Axis.propTypes = {
  type: PropTypes.string.isRequired,
  axis: PropTypes.func.isRequired,
  children: PropTypes.element,
  transform: PropTypes.string
}

export default Axis
