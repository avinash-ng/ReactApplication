import React from 'react'
import UploadForm from '../../components/organisms/form/upload/UploadForm'
export default {
    component: UploadForm,
    title: 'upload-form'
}

var styles = {
    marginLeft: '200px',
}
export const Default = () => <div style={styles}> <UploadForm> </UploadForm> </div>