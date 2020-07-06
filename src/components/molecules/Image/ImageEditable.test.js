import ImageEditable from './ImageEditable'
import expect from 'expect'
import sinon from 'sinon';
import { shallow, configure, mount } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import ImageTag from '../../atoms/ImageTag/ImageTag'
import Button from '../../atoms/Button/Button'

configure({ adapter: new Adapter() });
describe('<ImageEditable /> ', () => {
    it('renders <ImageTag /> element properly', () => {
        const object = {
            'selected': 'false'
        }
        const buttonName='click me'
        const RenderComponent = shallow(
            <ImageEditable object={object} buttonName={buttonName}></ImageEditable>
        );
        // console.log(RenderComponent)
        expect(RenderComponent.find(ImageTag).exists()).toBe(true)
    })
    
    it('renders <Button /> element properly', () => {
        const object = {
            'selected': 'true'
        }
        const buttonName='click me'
        const RenderComponent = shallow(
            <ImageEditable object={object} buttonName={buttonName}></ImageEditable>
        );
        // console.log(RenderComponent)
        expect(RenderComponent.find(Button).exists()).toBe(true)
    })
    it('recieved props correctly and check on click functionality', () => {
        const object = {
            'selected': true
        }
        const className = 'image';
        const buttonName = 'click me';
        const buttonOnClicked = sinon.spy();
        const headingOnClicked = sinon.spy();
        const RenderComponent = mount(<ImageEditable buttonName={buttonName} buttonOnClicked={buttonOnClicked} headingOnClicked={headingOnClicked} object={object} className={className} ></ImageEditable>)
        RenderComponent.find(Button).simulate('click')
        expect(buttonOnClicked).toHaveProperty('callCount', 1)
    })


    it('Matches snapshot', () => {
        const object = {
            'selected': false
        }
        const className = 'image';
        const buttonName = 'click me';
        const buttononClicked = sinon.spy();
        const headingOnClicked = sinon.spy();
        const RenderComponent = mount(<ImageEditable buttonName={buttonName} buttononClicked={buttononClicked} headingOnClicked={headingOnClicked} object={object} className={className} ></ImageEditable>)
        expect(RenderComponent).toMatchSnapshot()
    })
})