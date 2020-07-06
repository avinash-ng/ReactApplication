import React from 'react'
import EditForm from '../../organisms/form/edit/EditForm'
import DrawerComponent from "../../template/pagestemplate/DrawerComponent"
const ContentComponent = () => {
    return (
        <React.Fragment>
            <EditForm />
        </React.Fragment>
    )    
}

const EditComponent = () => {
    return (
        <DrawerComponent><ContentComponent /></DrawerComponent>
    )
}

export default EditComponent