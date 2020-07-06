import React from 'react'
import PropTypes from 'prop-types'
const Option = props => {
    return (
        <option value={props.value}>{props.name}</option>
    )    
}

Option.propTypes = {
    value: PropTypes.string.isRequired,
    name:  PropTypes.string.isRequired
}
export default Option;
