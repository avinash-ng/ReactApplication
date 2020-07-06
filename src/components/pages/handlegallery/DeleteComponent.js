import React from 'react'
import DeleteForm from '../../organisms/form/delete/DeleteForm'
import DrawerComponent from "../../template/pagestemplate/DrawerComponent";

export const ContentComponent = () => {
    return (
        <React.Fragment>
            <DeleteForm />
        </React.Fragment>
    )
}

const DeleteComponent = () => {
    return (
        <DrawerComponent><ContentComponent /></DrawerComponent>
    )
}

export default DeleteComponent