import TextArea from './TextArea'
import expect from 'expect'
import sinon from 'sinon';
import { shallow, configure } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer'
import { render } from '@testing-library/react';
import { TextareaAutosize } from '@material-ui/core';

configure({ adapter: new Adapter() });
describe('<TextArea /> ', () => {
    it('renders TextArea element', () => {
        const RenderComponent = shallow(
            <TextArea ></TextArea>
        );
        // console.log(RenderComponent)
        expect(RenderComponent.exists()).toBe(true)
    })

    it('recieved props correctly', () => {
        const placeholder = "Enter your text here..."
        const RenderComponent = shallow(<TextArea placeholder={placeholder}></TextArea>)
        expect(RenderComponent.find(TextareaAutosize).prop('placeholder')).toEqual(placeholder)

    })


    it('Matches snapshot', () => {
            const placeholder = "Enter your text..."
            const RenderComponent = shallow(<TextArea placeholder={placeholder}></TextArea>)
            expect(RenderComponent).toMatchSnapshot()
    
    })
})