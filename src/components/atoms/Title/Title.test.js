import Title from './Title'
import expect from 'expect'
import sinon from 'sinon';
import { shallow, configure } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer'
import { render } from '@testing-library/react';
import { Typography } from '@material-ui/core';

configure({ adapter: new Adapter() });
describe('<Title /> ', () => {
    it('renders Title element', () => {
        const RenderComponent = shallow(
            <Title name="max"></Title>
        );
        // console.log(RenderComponent)
        expect(RenderComponent.exists()).toBe(true)
    })

    it('recieved props correctly', () => {
        const name = "Max"
        
        const RenderComponent = shallow(<Title name={name}></Title>)
        expect(RenderComponent.find(Typography).text()).toBe("Hi "+name)

    })


    it('Matches snapshot', () => {
            const name="Max"
            const RenderComponent = shallow(<Title name={name}></Title>)
            expect(RenderComponent).toMatchSnapshot()
    
    })
})