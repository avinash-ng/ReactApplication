import ImageTag from './ImageTag'
import expect from 'expect'
import sinon from 'sinon';
import { shallow, configure } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer'
import {Button} from '@material-ui/core'
import { render } from '@testing-library/react';

configure({ adapter: new Adapter() });
describe('<ImageTag /> ', () => {
    it('renders ImageTag element', () => {
        const object = {
            'name': 'max'
        }
        const RenderComponent = shallow(
            <ImageTag object={object}></ImageTag>
        );
        // console.log(RenderComponent)
        expect(RenderComponent.find('h3').exists()).toBe(true)
    })

    it('recieved props correctly and check on click functionality' , () => {

        const onclick = sinon.spy()
        const className = "image-tag"
        const object = {
            'name': 'max'
        }
        const RenderComponent = shallow(<ImageTag className={className} onClicked={onclick} object={object}></ImageTag>)
        RenderComponent.find('h3').simulate('click')
        expect(onclick).toHaveProperty('callCount', 1)
    })


    it('Matches snapshot', () => {
        const className = "image-tag";
        const onClicked = sinon.spy()
        const object = {
            'name': 'max'
        }
        
        const RenderComponent = shallow(<ImageTag className={className} onClicked={onClicked} object={object}></ImageTag>)
        expect(RenderComponent).toMatchSnapshot()
    })
})