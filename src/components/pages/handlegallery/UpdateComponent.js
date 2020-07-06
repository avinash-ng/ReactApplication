import React from 'react'
import UploadForm from '../../organisms/form/upload/UploadForm'
import DrawerComponent from "../../template/pagestemplate/DrawerComponent"
const ContentComponent = () => {
    return (
        <React.Fragment>
            <UploadForm />
        </React.Fragment>
    )
}

const UpdateComponent = () => {
    return (
        <DrawerComponent><ContentComponent /></DrawerComponent>
    )
}

export default UpdateComponent