import React from 'react'
import { Button } from "@material-ui/core"
const MiUiButton = props => {
    return (
        <Button className={props.className} style={props.style} variant={props.variant} onClick={props.onClick}>{props.buttonName}</Button> 
    )
}
export default MiUiButton