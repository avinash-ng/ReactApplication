import React from 'react'
import PropTypes from "prop-types"
import "./Image.css"
const Image = (props) => {
    return (
        <img data-testid="image" src={props.imageName} alt={props.altText} />
    )
}
Image.propTypes = {
    imageName: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
} 

export default Image