import { Toolbar } from "@material-ui/core"
import Title from "../../atoms/Title/Title"
import MiUiButton from '../../atoms/Button/MiUiButton'
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
// import './ToolBar.css'
const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: '1000px'  
    }

})) 
const ToolBar = (props) => {
    const classes = useStyles()
    return (
        <Toolbar>
            <Title name={props.name}/>
            <MiUiButton className={classes.button} style={props.style} className="button" onClick={props.onClick} buttonName={props.buttonName}> </MiUiButton>
        </Toolbar>
    )
}

export default ToolBar