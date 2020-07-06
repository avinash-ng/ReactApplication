import Input from './Input'
import expect from 'expect'
import sinon from 'sinon';
import { shallow, mount, configure } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer'
import { render } from '@testing-library/react';

configure({ adapter: new Adapter() });
describe('<Input /> ', () => {
    it('renders Input element', () => {
        const RenderComponent = shallow(
            <Input ></Input>
        );
        // console.log(RenderComponent)
        expect(RenderComponent.exists()).toBe(true)
    })

    it('recieved props correctly and check onchange function', () => {
        const type = "text"
        const onchange = sinon.spy()
        const value = "custom value"
        const name = "input field"
        const RenderComponent = mount(<Input type={type} name={name} value={value} onChange={onchange}></Input>)
        RenderComponent.find('input').simulate('change')
        expect(onchange).toHaveProperty('callCount', 1)

    })


    it('Matches snapshot', () => {
        const type = "text"
        const onChange = jest.fn()
        const value = " custom value"
        const name = "input field"
        const RenderComponent = shallow(<Input type={type} name={name} value={value} onChange={onChange}></Input>)
        expect(RenderComponent).toMatchSnapshot()
    
    })
})