import React from 'react'
import Image from '../../atoms/Image/Image'
import ImageEditable from '../../molecules/Image/ImageEditable'
const ImageOrganism = (props) => {
    return (
        <div className={props.divClassName}>
            <Image altText={props.imgAltText} imageName={"http://localhost:3001/uploads/"+props.object.name}></Image>
            <br />
            <ImageEditable className={props.imgClassName} headingOnClicked={props.headingOnClicked} object={props.object} buttonName={props.buttonName} buttonOnClicked={props.buttonOnClicked}></ImageEditable>
        </div>
    )
}

export default ImageOrganism