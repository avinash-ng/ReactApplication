import Label from './Label'
import expect from 'expect'
import sinon from 'sinon';
import { shallow, configure } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer'
import { render } from '@testing-library/react';

configure({ adapter: new Adapter() });
describe('<Label /> ', () => {
    it('renders Label element', () => {
        const RenderComponent = shallow(
            <Label label="email"></Label>
        );
        // console.log(RenderComponent)
        expect(RenderComponent.exists()).toBe(true)
    })

    it('recieved props correctly', () => {
        const label = "First Name"
        
        const RenderComponent = shallow(<Label label={label}></Label>)
        expect(RenderComponent.find('span').text()).toBe(label)

    })


    it('Matches snapshot', () => {
            const label="First Name"
            const RenderComponent = shallow(<Label label={label}></Label>)
            expect(RenderComponent).toMatchSnapshot()
    
    })
})