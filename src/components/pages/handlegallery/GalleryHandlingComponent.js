import React from 'react';
import DrawerComponent from "../../template/pagestemplate/DrawerComponent"
// import axios from 'axios'
// import { Button } from "@material-ui/core"

// import Label from "../../atoms/Label/Label"
// import HTMLButton from "../../atoms/Button/Button"
// import DeleteForm from "../../organisms/form/delete/DeleteForm"
// import InputField from "../../molecules/field/InputField"
// import EditForm from "../../organisms/form/edit/EditForm"
// import UploadForm from '../../organisms/form/upload/UploadForm';
import Navigation from "../../template/form/Navigation"
const ContentComponent = () => {
    
    // const [file, setFile] = useState(null)
    // const [fileToDelete, updateFileToDelete] = useState('')
    // const [fileToEdit, updateFileToEdit] = useState('')
    // const [newFileName, updateNewFileName] = useState('')
    // const onChange = (e) => {
    //     setFile(e.target.files[0])
    // }

    // const onFormSubmit = () => {
    //     if (file !== null) {
    //         var formData = new FormData();
    //         formData.append('productImage', file);
    //         // var data = { binary: file }
    //         if (file !== undefined) {
    //             axios.post("http://localhost:3001/image", formData)
    //         }
    //     }

    // }

    // const resetForm = () => {
        
    // }

    // const onChangeHandler = (e) => {
    //     updateFileToDelete(e.target.value)
    // }

    // const confirmDelete = () => {
    //     // var data = {fileName: fileToDelete}
    //     console.log("delete confirm....")
    //     axios.delete("http://localhost:3001/image", {
    //         data: {
    //             fileName: fileToDelete
    //         }
    //     })
    // }

    // const confirmEdit = () => {
    //     console.log("Confirmed changes....")
    //     axios.patch("http://localhost:3001/image", {
    //         oldFileName: fileToEdit,
    //         newFileName: newFileName,
    //     }, )
    // }

    // const onChangeHandlerOldFile = (e) => {
    //     updateFileToEdit(e.target.value)
    // }
    // const onChangeHandlerNewFile = (e) => {
    //     updateNewFileName(e.target.value)
    // }

    return (
        <React.Fragment>
       {/* <form name = "myform" onSubmit={onFormSubmit()}>
        <h1>File Upload</h1>
            <InputField type="file" onChange={(e) => onChange(e)} /> <br/>
                <HTMLButton buttonName="upload" onClicked={resetForm}></HTMLButton>
        </form> */}
{/* <UploadForm />  */}
        {/* <form name="myform1">
                <h1>File Delete</h1> */}
                {/* <Label label="Name of the File : "></Label>
                <Input type="text" name = "delete file" value={fileToDelete} onChange={(e) => onChangeHandler(e)} /> */}
                {/* <InputField label="Name of the File : " type="text" name = "delete file" value={fileToDelete} onChange={(e) => onChangeHandler(e)}></InputField>
                <HTMLButton buttonName="Delete" onClicked={confirmDelete}></HTMLButton>
        </form> */} 
{/*<DeleteForm /> */}
            
        {/* <form name="myform2">
                <h1>File Edit</h1>
               
                <InputField label="Old File Name : " type="text" name="old File" value={fileToEdit} onChange={(e)=>onChangeHandlerOldFile(e)}> </InputField>
                <br /><br/>
               
                <InputField label="New File Name :" type="text" name="new File" value={newFileName} onChange={(e) =>onChangeHandlerNewFile(e) }></InputField><br/><br/>
               
                <HTMLButton buttonName="Edit" onClicked={confirmEdit}></HTMLButton>

                 {/* <Label label="Old File Name : "></Label>
                <Input type="text" name="old File" value={fileToEdit} onChange={(e) => onChangeHandlerOldFile(e)} />   */}
                 {/* <Label label="New File Name : "></Label> */}
                {/* <input type="text" name="new File" value={newFileName} onChange={(e) => onChangeHandlerNewFile(e)}></input> <br /> <br /> */}
                 {/* <button onClick={() => confirmEdit()}>Edit</button> */}
                
        {/* </form>  */}
            {/* <EditForm /> */}
            <Navigation />
        </React.Fragment>
    )
}
const GalleryHandlingComponent = () => {
    
    return (
        
        <div>
            <DrawerComponent > <ContentComponent /> </DrawerComponent>   
            
        </div>
    )
}
export default GalleryHandlingComponent;