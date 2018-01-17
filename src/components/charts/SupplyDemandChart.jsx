import PropTypes from "prop-types"
import React from "react"
import Axis from "./components/Axis"
import Chart from "./components/Chart"
import Line from "./components/Line"
import {
  axisBottom,
  axisLeft,
  curveBasis,
  extent,
  line,
  scaleLinear,
  scaleTime,
  timeFormat
} from "d3"

class SupplyDemandChart extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.any).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    margin: PropTypes.shape({
      top: PropTypes.number.isRequired,
      right: PropTypes.number.isRequired,
      bottom: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired
    }).isRequired,
    xMap: PropTypes.func.isRequired,
    yMap1: PropTypes.func.isRequired,
    yMap2: PropTypes.func.isRequired
  }

  render() {
    const width =
      this.props.width - this.props.margin.right - this.props.margin.left
    const height =
      this.props.height - this.props.margin.top - this.props.margin.bottom

    const x = scaleTime()
      .domain(extent(this.props.data, this.props.xMap))
      .rangeRound([0, width])
    const y = scaleLinear()
      .domain(extent(this.props.data, this.props.yMap1))
      .rangeRound([height, 0])

    const scaleX = d => x(this.props.xMap(d))
    const scaleY1 = d => y(this.props.yMap1(d))
    const scaleY2 = d => y(this.props.yMap2(d))

    const axisX = axisBottom()
      .scale(x)
      .tickFormat(timeFormat("%B %Y"))
    const axisY = axisLeft()
      .scale(y)
      .ticks(5)

    const lineFunctionSupply = line()
      .curve(curveBasis)
      .x(scaleX)
      .y(scaleY1)
      .defined(d => !isNaN(this.props.yMap1(d)))
    const lineFunctionDemand = line()
      .curve(curveBasis)
      .x(scaleX)
      .y(scaleY2)
      .defined(d => !isNaN(this.props.yMap2(d)))

    return (
      <Chart
        width={this.props.width}
        height={this.props.height}
        margin={this.props.margin}
      >
        <Axis type="x" axis={axisX} transform={`translate(0, ${height})`} />
        <Axis type="y" axis={axisY} />

        <Line data={this.props.data} line={lineFunctionSupply} />
        <Line color={"red"} data={this.props.data} line={lineFunctionDemand} />
      </Chart>
    )
  }
}

export default SupplyDemandChart
