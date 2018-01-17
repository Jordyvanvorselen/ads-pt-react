import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import queryString from "query-string"
import PriceChart from "./charts/PriceChart"
import SupplyDemandChart from "./charts/SupplyDemandChart"
import Content from "./Content"
import Mentions from "../containers/Mentions"

export default class Detail extends React.Component {
  static propTypes = {
    fetchRsBuddy: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search)

    this.props.fetchRsBuddy(parseInt(id, 10))
  }

  render() {
    const margin = { top: 20, right: 20, bottom: 50, left: 75 }

    return (
      <Content>
        <div
          style={{ gridColumn: "2/9" }}
          ref={wrapper => {
            this.wrapper = wrapper
          }}
        >
          {(() => {
            const width = this.wrapper
              ? this.wrapper.getBoundingClientRect().width
              : 0
            const height = width * (9 / 21)

            if (this.props.loading) return <p>Loading</p>
            else if (this.props.error) return <p>Error</p>
            else {
              return (
                <div class="detail-wrapper">
                  <h2>{this.props.data.name}</h2>

                  <PriceChart
                    data={this.props.data.rsbuddy}
                    xMap={d => new Date(d.timestamp)}
                    yMap={d => parseFloat(d.buyingPrice)}
                    width={width}
                    height={height}
                    margin={margin}
                  />

                  <h2>Supply and demand chart</h2>

                  <SupplyDemandChart
                    data={this.props.data.rsbuddy}
                    xMap={d => new Date(d.timestamp)}
                    yMap1={d => parseFloat(d.buyingCompleted)}
                    yMap2={d => parseFloat(d.sellingCompleted)}
                    width={width}
                    height={height}
                    margin={margin}
                  />
                </div>
              )
            }
          })()}
        </div>

        <div style={{ gridColumn: "10/12", gridRow: "1" }}>
          <h2>Item Information</h2>
        </div>

        <img
          style={{
            marginTop: "120px",
            marginLeft: "50px",
            width: "75px",
            height: "75px",
            gridColumn: "10/11",
            gridRow: "1"
          }}
          src="http://i.imgur.com/sdO8tAw.png"
          alt="reddit logo"
        />
        <div
          className="reddit-mention-text"
          style={{ gridColumn: "11/12", gridRow: "1" }}
        >
          <Mentions />
        </div>
      </Content>
    )
  }
}
