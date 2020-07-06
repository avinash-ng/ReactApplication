import TextAreaField from './TextAreaField'
import expect from 'expect'
import sinon from 'sinon';
import { shallow, configure, mount } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { Button } from '@material-ui/core';
import ImageTag from '../../atoms/ImageTag/ImageTag'
import MiUiButton from '../../atoms/Button/MiUiButton'
import Title from '../../atoms/Title/Title';
import Label from '../../atoms/Label/Label';
import TextArea from '../../atoms/Textarea/TextArea';

configure({ adapter: new Adapter() });
describe('<TextAreaField /> ', () => {
    it('renders <Label /> element properly', () => {
        const label='Label '

        const RenderComponent = shallow(
            <TextAreaField label={label}></TextAreaField>
        );
        // console.log(RenderComponent)
        expect(RenderComponent.find(Label).exists()).toBe(true)
    })
    
    it('renders <TextAreaAutoSize /> element properly', () => {
        
        const label='Label '
        const RenderComponent = shallow(
            <TextAreaField label={label}></TextAreaField>
        );
        // console.log(RenderComponent)
        expect(RenderComponent.find(TextArea).exists()).toBe(true)
    })
    it('recieved props correctly ', () => {
        const label = "Label 1"
        const placeholder = "enter your string..."
        const RenderComponent = shallow(<TextAreaField label={label} placeholder={placeholder }></TextAreaField>)
        expect(RenderComponent.find(TextArea).prop('placeholder')).toBe(placeholder)
    })


    it('Matches snapshot', () => {
        const RenderComponent = shallow(<TextAreaField label="Label"></TextAreaField>)
        expect(RenderComponent).toMatchSnapshot()
    })
})