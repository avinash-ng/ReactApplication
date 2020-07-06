import React from 'react'
import PropTypes from 'prop-types'
const Button = (props ) => {
    return (
        <button className="a_button" className={props.className} onClick={props.onClicked}>{props.buttonName}</button>
    )
}

Button.propTypes = {
    buttonName: PropTypes.string.isRequired
}

export default Button
