import InputField from './InputField'
import expect from 'expect'
import sinon from 'sinon';
import { shallow, configure, mount } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer'
import { Button } from '@material-ui/core'
import { render } from '@testing-library/react';
import Input from '../../atoms/Input/Input'
import Label from '../../atoms/Label/Label'

configure({ adapter: new Adapter() });
describe('<InputField /> ', () => {
    it('renders <Label /> element properly', () => {
        const RenderComponent = shallow(
            <InputField label="First Name "></InputField>
        );
        // console.log(RenderComponent)
        expect(RenderComponent.find(Label).exists()).toBe(true)
    })
    
    it('renders <Input /> element properly', () => {
        const RenderComponent = shallow(
            <InputField label="Last Name "></InputField>
        );
        // console.log(RenderComponent)
        expect(RenderComponent.find(Input).exists()).toBe(true)
    })
    it('recieved props correctly and check on click functionality', () => {
        const label = 'First Name ';
        const type = 'text';
        const name = 'fname';
        const onChange = sinon.spy();
        const value = "avinash";
        const RenderComponent = shallow(<InputField label={label} name={name} value={value} type={type} onChange={onChange}></InputField>)
        expect(RenderComponent.find(Input).prop('name')).toBe(name)
        
    })


    it('Matches snapshot', () => {
        const label = 'Email ';
        const type = 'email';
        const name = 'email';
        const onChange = sinon.spy();
        const value = "abcd@gmail.com";
        const RenderComponent = mount(<InputField label={label} name={name} value={value} type={type} onChange={onChange}></InputField>)
        expect(RenderComponent).toMatchSnapshot()
    })
})