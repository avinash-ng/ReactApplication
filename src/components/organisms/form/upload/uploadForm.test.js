const { shallow, configure, mount } = require("enzyme")
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import Button from "../../../atoms/Button/Button";
import sinon from 'sinon'
import { render, fireEvent } from "@testing-library/react";
import UploadForm, { uploadFormSubmit } from './UploadForm'
import { confirmUploadForm } from './UploadForm'
configure({ adapter: new Adapter() });
describe('testing <UploadForm /> ', () => {
    it('renders <UploadForm /> correctly', () => {
        const RenderComponent = shallow(<UploadForm> </UploadForm>)
        expect(RenderComponent.exists()).toBe(true)
    })

    it('form submitting functionality', () => {
        const deleteFunction = sinon.spy()
        const RenderComponent = mount(<UploadForm > </UploadForm>)

        RenderComponent.find('form').simulate('submit')

        expect(uploadFormSubmit).toBe(true)


    })

    it('matches snapshot', () => {
        const RenderComponent = shallow(<UploadForm></UploadForm>)
        expect(RenderComponent).toMatchSnapshot()
    })
})