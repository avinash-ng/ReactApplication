import React from 'react'
import './ImageTag.css'
const ImageTag = props => {
    return (
        <h3 className={props.className} style={{ width: '450px', marginBottom: '20px' }} onClick={props.onClicked} >{props.object.name}</h3>
    )
}
export default ImageTag