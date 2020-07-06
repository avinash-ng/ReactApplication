import React from 'react'
import Label from "../../atoms/Label/Label"
import Input from "../../atoms/Input/Input"
const InputField = (props) => {
    return (
        <div>
            <Label label={props.label}> </Label>
            <Input className={props.className} type={props.type} name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder}></Input>
        </div>   
    )
}
export default InputField;