const { shallow, configure, mount } = require("enzyme")
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import Button from "../../../atoms/Button/Button";
import sinon from 'sinon'
import { render, fireEvent } from "@testing-library/react";
import EditForm from './EditForm'
import { confirmEditForm } from './EditForm'
configure({ adapter: new Adapter() });
describe('testing <EditForm /> ', () => {
    it('renders <EditForm /> correctly', () => {
        const RenderComponent = shallow(<EditForm> </EditForm>)
        expect(RenderComponent.exists()).toBe(true)
    })

    it('form submitting functionality', () => {
        const deleteFunction = sinon.spy()
        const RenderComponent = mount(<EditForm > </EditForm>)

        RenderComponent.find(Button).simulate('click')

        expect(confirmEditForm).toBe(true)


    })

    it('matches snapshot', () => {
        const RenderComponent = shallow(<EditForm></EditForm>)
        expect(RenderComponent).toMatchSnapshot()
    })
})