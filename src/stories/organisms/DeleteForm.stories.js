import DeleteForm from "../../components/organisms/form/delete/DeleteForm";
import React from 'react'
import sinon from 'sinon'
import { styled } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export default {
    component: DeleteForm,
    title: 'Delete Form'
}
const deleteFunction = sinon.fake.returns('deleted ')

const StyledComponent = styled(DeleteForm)({
    backgroundColor: 'red'
})
var styles = {
    backgroundColor: red
}
export const Default = () => < DeleteForm style = {styles}> </DeleteForm>