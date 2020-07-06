import React from 'react'
import { TextareaAutosize } from '@material-ui/core';
const TextArea = (props) => {
    return (
        <TextareaAutosize placeholder={props.placeholder} ></TextareaAutosize>
    )

}

export default TextArea;