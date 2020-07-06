import MainListItems from './MainListItems'
import expect from 'expect'
import sinon from 'sinon';
import { shallow, configure, mount } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { render, cleanup, fireEvent } from "@testing-library/react";
configure({ adapter: new Adapter() });
describe('<MainListItems /> ', () => {
    it('renders list item < home />', () => {

        const {getByText} = render(
            <MainListItems ></MainListItems>
        );
        expect(getByText('Home')).toBeInTheDocument()
        // console.log(RenderComponent)
        
    })

    it('renders list item <About />', () => {

        const { getByText } = render(
            <MainListItems ></MainListItems>
        );
        expect(getByText('About')).toBeInTheDocument()
        // console.log(RenderComponent)

    })

    it('checking click functionality', () => {
        const clicked = sinon.spy()
        const { getByText } = render(
            <MainListItems clicked={clicked}> </MainListItems>
        )
        fireEvent.click(getByText('Home'))
        expect(clicked).toHaveProperty('callCount', 1)
    })

    it('Matches snapshot', () => {
        const clicked = sinon.spy()
        const RenderComponent = shallow(<MainListItems clicked={clicked}> </MainListItems>)
        expect(RenderComponent).toMatchSnapshot()
    })
})