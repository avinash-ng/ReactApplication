const { shallow, configure, mount } = require("enzyme")
import ListWithSubMenu from "./ListWithSubMenu"
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import Button from "../../atoms/Button/Button";
import sinon from 'sinon'
import { render, fireEvent } from "@testing-library/react";
import Image from "../../atoms/Image/Image";
import ImageEditable from "../../molecules/Image/ImageEditable";
import {ListItem} from '@material-ui/core'
import Anchor from "../../atoms/Anchor/Anchor";

configure({ adapter: new Adapter() });
describe('testing <ListWithSubMenu /> ', () => {
    it('renders <ListItem /> correctly', () => {
        
        const RenderComponent = shallow(<ListWithSubMenu > </ListWithSubMenu>)
        expect(RenderComponent.find(ListItem).exists()).toBe(true)
    })

    it('renders dropdown-content correctly', () => {
        const RenderComponent = shallow(<ListWithSubMenu > </ListWithSubMenu>)
        expect(RenderComponent.find('.dropdown-content').exists()).toBe(true)
    })

    it('checking on click functionality ', () => {
        //

    })

    it('matches snapshot', () => {
        const RenderComponent = shallow(<ListWithSubMenu ></ListWithSubMenu>)
        expect(RenderComponent).toMatchSnapshot()
    })
})