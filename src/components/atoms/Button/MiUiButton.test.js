import MiUiButton from './MiUiButton'
import expect from 'expect'
import sinon from 'sinon';
import { shallow, configure } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer'
import {Button} from '@material-ui/core'
import { render } from '@testing-library/react';

configure({ adapter: new Adapter() });
describe('<MiUiButton /> ', () => {
    it('renders MiUiButton element', () => {
        const buttonName="click me"
        const RenderComponent = shallow(
            <MiUiButton buttonName={buttonName}></MiUiButton>
        );
        // console.log(RenderComponent)
        expect(RenderComponent.exists()).toBe(true)
    })

    it('recieved props correctly and check button click' , () => {
        const buttonName = "click me";
        // jest.fn()
        const mockFunction = sinon.spy()
        const RenderComponent = shallow(<MiUiButton buttonName={buttonName} onClick={mockFunction}></MiUiButton>)
        // console.log(RenderComponent.find('button'))
        RenderComponent.find(Button).simulate('click')
        expect(mockFunction).toHaveProperty('callCount', 1)
        // console.log(RenderComponent)

    })


    it('Matches snapshot', () => {
        const buttonName = "click me";
        const render = shallow(<MiUiButton buttonName={buttonName}></MiUiButton>)
        expect(render).toMatchSnapshot()
    })
})