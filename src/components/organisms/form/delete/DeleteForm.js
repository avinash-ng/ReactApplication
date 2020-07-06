import InputField from '../../../molecules/Fields/InputField'
import React, { useState } from 'react'
import axios from 'axios'
import HTMLButton from '../../../atoms/Button/Button'
// import './DeleteForm.css'
import {makeStyles} from '@material-ui/core/styles'
export var called = 2;

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '20px',
        marginTop: '100px',
    },
    button: {
        fontSize: '20px',
        marginTop: '40px',
        marginLeft: '0px',
        backgroundColor: 'black',
        color: 'white',
        width: '100px'
    },
    input: {
        height: '30px',
        width: '200px',
    }

}))
const DeleteForm = () => {
    const classes = useStyles()
    const [fileToDelete, updateFileToDelete] = useState('')
    const onChangeHandler = (e) => {
        updateFileToDelete(e.target.value)
    }

    const confirmDelete = () => {
        // var data = {fileName: fileToDelete}
        called = 1;
        console.log("delete confirm....")
        axios.delete("http://localhost:3001/image", {
            data: {
                fileName: fileToDelete 
            }
        })
    }
    
    // const onChangeHandlerOldFile = () => {

    // }
    return (
        <div className="delete-main-div" className={classes.mainDiv}> 
            <form className="myform1" >
                <h1>File Delete</h1>
                <InputField className={classes.input} label="Name of the File : " type="text" name="delete file" value={fileToDelete} onChange={(e) => onChangeHandler(e)}></InputField>

                <HTMLButton className={classes.button} buttonName="Delete" onClicked={confirmDelete}></HTMLButton>
            </form>
        </div>
    )
}



export default DeleteForm
