const { shallow, configure, mount } = require("enzyme")
import AboutComponent from "./AboutComponent"
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import Button from "../../atoms/Button/Button";
import sinon from 'sinon'
import { render, fireEvent } from "@testing-library/react";
import Image from "../../atoms/Image/Image";
import ImageEditable from "../../molecules/Image/ImageEditable";
import { ListItem, AppBar } from '@material-ui/core'
import {useAuth0} from '../../../react-auth0-spa'
import { TabPanel } from "./AboutComponent";

configure({ adapter: new Adapter() });
const user = {
    email: "av@gmail.com",
    email_verified: true,
    sub: "google-oauth2|12345678901234"
}
jest.mock("../../../react-auth0-spa");
describe('testing <AboutComponent /> ', () => {
    beforeEach(() => {
        // Mock the Auth0 hook and make it return a logged in state
        useAuth0.mockReturnValue({
            isAuthenticated: true,
            user,
            logout: jest.fn(),
            loginWithRedirect: jest.fn()
        });
    });

    it('renders <img /> correctly', () => {

        const RenderComponent = mount(<AboutComponent > </AboutComponent>)
        expect(RenderComponent.find('img').exists()).toBe(true)
    })

    it('renders div with className brief-content correctly', () => {
        const RenderComponent = mount(<AboutComponent > </AboutComponent>)
        expect(RenderComponent.find('.brief-content').exists()).toBe(true)
    })



    it('matches snapshot', () => {
        const RenderComponent = shallow(<AboutComponent ></AboutComponent>)
        expect(RenderComponent).toMatchSnapshot()
    })
})