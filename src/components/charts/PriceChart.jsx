import PropTypes from "prop-types"
import React from "react"
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
import Axis from "./components/Axis"
import Chart from "./components/Chart"
import Line from "./components/Line"

class PriceChart extends React.Component {
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
    yMap: PropTypes.func.isRequired
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
      .domain(extent(this.props.data, this.props.yMap))
      .rangeRound([height, 0])

    const scaleX = d => x(this.props.xMap(d))
    const scaleY = d => y(this.props.yMap(d))

    const axisX = axisBottom()
      .scale(x)
      .tickFormat(timeFormat("%B %Y"))
    const axisY = axisLeft()
      .scale(y)
      .ticks(5)

    const lineFunction = line()
      .curve(curveBasis)
      .x(scaleX)
      .y(scaleY)
      .defined(d => !isNaN(this.props.yMap(d)))

    return (
      <Chart
        width={this.props.width}
        height={this.props.height}
        margin={this.props.margin}
      >
        <Axis type="x" axis={axisX} transform={`translate(0, ${height})`} />
        <Axis type="y" axis={axisY} />

        <Line data={this.props.data} line={lineFunction} />
      </Chart>
    )
  }
}

export default PriceChart
