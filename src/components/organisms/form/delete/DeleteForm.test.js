const { shallow,  configure, mount} = require("enzyme")
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import Button from "../../../atoms/Button/Button";
import sinon from 'sinon'
import { render, fireEvent } from "@testing-library/react";
import DeleteForm from './DeleteForm'
import {called} from './DeleteForm'
configure({ adapter: new Adapter() });
describe('testing <DeleteForm /> ', () => {
    it('renders <DeleteForm /> correctly', () => {
        const RenderComponent = shallow( <DeleteForm> </DeleteForm>)
        expect(RenderComponent.exists()).toBe(true)
    })

    it('form submitting functionality', () => {
        const deleteFunction = sinon.spy()
        const RenderComponent = mount(<DeleteForm > </DeleteForm>) 
       
        RenderComponent.find(Button).simulate('click')

        expect(called).toBe(1)

        
    })

    it('matches snapshot', () => {
        const RenderComponent = shallow(<DeleteForm></DeleteForm>)
        expect(RenderComponent).toMatchSnapshot()
    })
})