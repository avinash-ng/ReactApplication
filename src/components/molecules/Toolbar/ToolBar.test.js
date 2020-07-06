import ToolBar from './ToolBar'
import expect from 'expect'
import sinon from 'sinon';
import { shallow, configure, mount } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { Button } from '@material-ui/core';
import ImageTag from '../../atoms/ImageTag/ImageTag'
import MiUiButton from '../../atoms/Button/MiUiButton'
import Title from '../../atoms/Title/Title';

configure({ adapter: new Adapter() });
describe('<ToolBar /> ', () => {
    it('renders Title /> element properly', () => {
        
        const RenderComponent = shallow(
            <ToolBar ></ToolBar>
        );
        // console.log(RenderComponent)
        expect(RenderComponent.find(Title).exists()).toBe(true)
    })
    
    it('renders <MiUiButton /> element properly', () => {
        
        const buttonName='click me'
        const RenderComponent = shallow(
            <ToolBar ></ToolBar>
        );
        // console.log(RenderComponent)
        expect(RenderComponent.find(MiUiButton).exists()).toBe(true)
    })
    it('recieved props correctly and check on click functionality', () => {
        const name = "Welcome"
        const onClick = sinon.spy()
        const  buttonName='click me'
        const RenderComponent = shallow(<ToolBar name={name} onClick={onClick} buttonName={buttonName}></ToolBar>)
        RenderComponent.find(MiUiButton).simulate('click')
        expect(onClick).toHaveProperty('callCount', 1)
    })


    it('Matches snapshot', () => {
        const RenderComponent = shallow(<ToolBar></ToolBar>)
        expect(RenderComponent).toMatchSnapshot()
    })
})