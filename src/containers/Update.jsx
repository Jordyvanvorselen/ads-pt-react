import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux";

const Update = ({ itemId, data, loading, error }) =>
    <div>{(() => {
        if (loading)
            return "Loading last update..."
        else {
            const ids = data.map(item => item.item_id)

            if (ids.includes(itemId))
                return "This item was included in the last update"
            else
                return "This item was not mentioned in the last update"
        }
    })()}
    </div>

const mapStateToProps = state => ({
    itemId: state.rsbuddy.data.id,
    ...state.update
})

export default connect(mapStateToProps)(Update)