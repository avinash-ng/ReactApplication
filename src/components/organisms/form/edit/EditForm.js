import React, {useState} from 'react'
import InputField from "../../../molecules/Fields/InputField"
import HTMLButton from '../../../atoms/Button/Button'
import axios from 'axios'
// import './editform.css'
import {makeStyles} from '@material-ui/core/styles'
export var confirmEditForm = false


const useStyles = makeStyles((theme) => ({
    mainDiv: {
        textAlign:'center',
        fontSize: '20px',
        marginTop: '100px',
    },
    button: {
        fontSize: '20px',
        marginLeft: '-20px',
        backgroundColor: 'black',
        color: 'white',
        width: '100px',
        height: '40px'
    },
    input: {
        height: '30px',
        width: '250px',
    },
    span: {
        justifyContent: 'center',
        marginRight: '30px'
    }

}))
const EditForm = () => {
    const classes = useStyles()
    const [fileToEdit, updateFileToEdit] = useState('')
    const [newFileName, updateNewFileName] = useState('')
    
    // const onChange = (e) => {
    //     setFile(e.target.files[0])
    // }
    const confirmEdit = () => {
        confirmEditForm = true
        console.log("Confirmed changes....")
        axios.patch("http://localhost:3001/image", {
            oldFileName: fileToEdit,
            newFileName: newFileName,
        }, )
    }

    const onChangeHandlerOldFile = (e) => {
        updateFileToEdit(e.target.value)
    }

    const onChangeHandlerNewFile = (e) => {
        updateNewFileName(e.target.value)
    }

    return (
        <div className="edit-main-div" className={classes.mainDiv}>
        
        <form className="editform">
                
                <h1>File Edit</h1>
                <InputField className={classes.input} label="Old File Name : " type="text" name="old File" value={fileToEdit} onChange={(e)=>onChangeHandlerOldFile(e)}> </InputField> 
                <br /><br/>
               
                <InputField className={classes.input}  label="New File Name :  " type="text" name="new File" value={newFileName} onChange={(e) =>onChangeHandlerNewFile(e) }></InputField><br/><br/>
               
                <HTMLButton className={classes.button} buttonName="Edit" onClicked={confirmEdit}></HTMLButton>
                
            </form>
        </div>
    )
    
}

export default EditForm;
