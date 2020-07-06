import React, {useState} from 'react'
import InputField from '../../../atoms/Input/Input'
import HTMLButton from '../../../atoms/Button/Button'
import axios from 'axios'
import './upload.css'
import $ from 'jquery'
import {makeStyles} from '@material-ui/core/styles'
import Button from '../../../atoms/Button/MiUiButton'
export var uploadFormSubmit = false


const useStyles = makeStyles((theme) => ({

    label: {
        width: '100px'
    },
    span: {
        backgroundColor: '#428bca',
        fontSize: '20px',
        padding: '10px',
        borderRadius: '4px',
        width: '100px',
        paddingTop: '8px',
        paddingBottom: '11px',
        color: 'white',
        cursor: 'pointer',
    },
    heading: {
        textAlign: 'center'
    }, 
    button: {
        marginLeft: 'auto',
        marginTop: '50px',
        fontSize: '20px',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'white'
    },
    mainDiv: {
        width: '750px',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formcontrol: {
        height: '38px',
        width: '375px'
    },
    inputgroup: {
        marginBottom: '20px',
        textAlign: 'center'
    },
    helpblock: {
        fontSize: '20px',
        marginLeft: '50px',
    }

}))
const UploadForm = () => {
    const classes = useStyles()
    const [file, setFile] = useState(null)
    const onChange = (e) => {
        setFile(e.target.files[0])
        document.getElementsByClassName("form-control")[0].value = e.target.files[0].name

    }

    const onFormSubmit = () => {
        uploadFormSubmit = true
        if (file !== null) {
            var formData = new FormData();
            formData.append('productImage', file);
            console.log(formData.productImage)
            // var data = { binary: file }
            if (file !== undefined) {
                axios.post("http://localhost:3001/image", formData)
            }
        }

    }

    const resetForm = () => {
        
    }

    return (
        <form name = "myform" onSubmit={onFormSubmit()}>
        
            <div className="col-lg-6 col-sm-6 col-12" className="upload-main-div" className={classes.mainDiv}>
                <h1 className={classes.heading}>File Upload</h1>
            <h4 className={classes.heading}> Input Groups</h4>
                    <div className="input-group" className={classes.inputgroup}>
                    
                        <label className="input-group-btn" className={classes.label} >
                    
                        <span id="span" className="btn btn-primary" className={classes.span}>
                                Browse&hellip; <input type="file" style={{ display: 'none' }} onChange={onChange}/>
                        </span>
                        </label>
                    
                        <input type="text" className="form-control"  />
                    </div>
                <span style={{ justifyContent: 'center' }} className="help-block" className={classes.span}>
                    Try uploading a file and you could see in gallery
            </span> <br/>
                
                <Button className={classes.button} type="submit" name="upload" buttonName="upload"></Button>
        </div>
        </form>
    )
}

export default UploadForm