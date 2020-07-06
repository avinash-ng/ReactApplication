import  TextArea  from "../../atoms/Textarea/TextArea"
import Label from "../../atoms/Label/Label"
import React from 'react'
const TextAreaField = props => {
    return (
        <div>
        <Label label={props.label}></Label>
        <TextArea placeholder={props.placeholder}></TextArea>
        </div>
    )
}
export default TextAreaField;