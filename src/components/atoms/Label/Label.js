import React from 'react'
import PropTypes from 'prop-types'
const Label = (props) => {
    return (
        <span className="a__label" >{props.label}</span>
        
    )
}

Label.propTypes = {
    label : PropTypes.string.isRequired
}
export default Label