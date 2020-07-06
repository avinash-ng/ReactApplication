import React from 'react'
import ImageTag from '../../atoms/ImageTag/ImageTag'
import Button from "../../atoms/Button/Button"
const ImageEditable = props => {
    return (
        <div className="tag-div" contentEditable="true" suppressContentEditableWarning={true}>
            {/* <h3 className = "h3-image-tag" style={{ width: '450px' }}  onClick={() => changeHeading(each, index)} >{each.name}</h3> */}
            <ImageTag className={props.className} onClicked={props.headingOnClicked} object={props.object}></ImageTag>
            {props.object.selected ? <Button buttonName={props.buttonName} onClicked={props.buttonOnClicked}></Button> : ""}

        </div>
    )
}
export default ImageEditable