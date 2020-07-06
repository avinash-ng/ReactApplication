import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => {
    // console.log(props.type + " " + props.value + " " + props.name)
    return ( <
        input type={props.type}
        className={props.className}
        onChange = { props.onChange }
        value = { props.value }
        name = { props.name }
        placeholder = { props.placeholder }
        />
    )
}

Input.propTypes = {
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string

}
export default Input