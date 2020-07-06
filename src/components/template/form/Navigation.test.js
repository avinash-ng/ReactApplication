const { shallow, configure, mount } = require("enzyme")
import Navigation from "./Navigation"
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import Button from "../../atoms/Button/Button";
import sinon from 'sinon'
import { render, fireEvent } from "@testing-library/react";
import Image from "../../atoms/Image/Image";
import ImageEditable from "../../molecules/Image/ImageEditable";
import { ListItem, AppBar } from '@material-ui/core'
import { TabPanel }  from "./Navigation";

configure({ adapter: new Adapter() });
describe('testing <Navigation /> ', () => {
    it('renders <AppBar /> correctly', () => {

        const RenderComponent = shallow(<Navigation > </Navigation>)
        expect(RenderComponent.find(AppBar).exists()).toBe(true)
    })

    it('renders <TabPanel /> correctly', () => {
        const RenderComponent = shallow(<Navigation > </Navigation>)
        expect(RenderComponent.find(TabPanel).exists()).toBe(true)
    })

   

    it('matches snapshot', () => {
        const RenderComponent = shallow(<Navigation ></Navigation>)
        expect(RenderComponent).toMatchSnapshot()
    })
})