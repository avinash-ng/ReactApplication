import Option from './Option'
import expect from 'expect'
import sinon from 'sinon';
import { shallow, configure } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer'
import { render } from '@testing-library/react';

configure({ adapter: new Adapter() });
describe('<Option /> ', () => {
    it('renders Option element', () => {
        const name = "delete"
        const value = "delete"
        const RenderComponent = shallow(
            <Option value={value} name={name}></Option>
        );
        // console.log(RenderComponent)
        expect(RenderComponent.exists()).toBe(true)
    })

    it('recieved props correctly', () => {
        const name = "upload"
        const value="upload"
        
        const RenderComponent = shallow(<Option value={value} name={name}></Option>)
        expect(RenderComponent.find('option').text()).toBe(name)

    })


    it('Matches snapshot', () => {
        const value = "edit"
        const name = "edit"
        const RenderComponent = shallow(<Option value={value} name={name}></Option>)
        expect(RenderComponent).toMatchSnapshot()
    
    })
})