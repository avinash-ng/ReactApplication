const { shallow, configure, mount } = require("enzyme")
import ImageOrganism from "./ImageOrganism"
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import Button from "../../atoms/Button/Button";
import sinon from 'sinon'
import { render, fireEvent } from "@testing-library/react";
import Image from "../../atoms/Image/Image";
import ImageEditable from "../../molecules/Image/ImageEditable";
const object = {
    'name': 'max.png',
    'selected':true
}
const object1 = {
    'name': 'max.png',
    'selected':false
}
const alt = 'Error in loading....'
const imgClassName = 'image'
const buttonName= 'click em'
configure({ adapter: new Adapter() });
describe('testing <ImageOrganism /> ', () => {
    it('renders <Image /> correctly', () => {
        console.log(object)
        const RenderComponent = shallow(<ImageOrganism buttonName={buttonName} object={object} imgAltText={alt}> </ImageOrganism>)
        expect(RenderComponent.find(Image).exists()).toBe(true)
    })

    it('renders <ImageEditable /> correctly', () => {
        const RenderComponent = shallow(<ImageOrganism buttonName={buttonName} object={object} imgAltText={alt}> </ImageOrganism>)
        expect(RenderComponent.find(ImageEditable).exists()).toBe(true)
    })

    it('checking on click functionality ', () => {
        const deleteFunction = sinon.spy()
        const RenderComponent = mount(<ImageOrganism buttonName={buttonName} object={object} imgAltText={alt} buttonOnClicked={deleteFunction}> </ImageOrganism>)

        RenderComponent.find(Button).simulate('click')

        expect(deleteFunction).toHaveProperty('callCount', 1)


    })

    it('matches snapshot', () => {
        const RenderComponent = shallow(<ImageOrganism buttonName={buttonName}  object={object} imgAltText={alt}></ImageOrganism>)
        expect(RenderComponent).toMatchSnapshot()
    })
})