import Button from './Button'
import expect from 'expect'
import sinon from 'sinon';
import { shallow, configure } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer'
import { render } from '@testing-library/react';

configure({ adapter: new Adapter() });
describe('<Button /> ', () => {
    it('renders Button element', () => {
        const buttonName="click me"
        const RenderComponent = shallow(
            <Button buttonName={buttonName}></Button>
        );
        // console.log(RenderComponent)
        expect(RenderComponent.exists()).toBe(true)
    })

    it('recieved props correctly and button click', () => {
        const buttonName = "click me";
        // jest.fn()
        const mockFunction = sinon.spy()
        const RenderComponent = shallow(<Button buttonName={buttonName} onClicked={mockFunction}></Button>)
        RenderComponent.find('button').simulate('click')
        expect(mockFunction).toHaveProperty('callCount', 1)
        // console.log(RenderComponent)

    })


    it('Matches snapshot', () => {
        const buttonName = "click me";
        const render = shallow(<Button buttonName={buttonName}></Button>)
        expect(render).toMatchSnapshot()
    })
})