const { shallow, configure, mount } = require("enzyme")
import ContactComponent from "./ContactComponent"
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import Button from "../../atoms/Button/Button";
import sinon from 'sinon'
import { render, fireEvent } from "@testing-library/react";
import Image from "../../atoms/Image/Image";
import ImageEditable from "../../molecules/Image/ImageEditable";
import { ListItem, AppBar } from '@material-ui/core'
import { useAuth0 } from '../../../react-auth0-spa'
import { TabPanel } from "./ContactComponent";

configure({ adapter: new Adapter() });
const user = {
    email: "av@gmail.com",
    email_verified: true,
    sub: "google-oauth2|12345678901234"
}
jest.mock("../../../react-auth0-spa");
describe('testing <ContactComponent /> ', () => {
    beforeEach(() => {
        // Mock the Auth0 hook and make it return a logged in state
        useAuth0.mockReturnValue({
            isAuthenticated: true,
            user,
            logout: jest.fn(),
            loginWithRedirect: jest.fn()
        });
    });

    it('renders content-comp correctly', () => {

        const RenderComponent = mount(<ContactComponent> </ContactComponent>)
        expect(RenderComponent.find('.content-comp').exists()).toBe(true)
    })

    it('should render button correctly', () => {
        const RenderComponent = mount(<ContactComponent > </ContactComponent>)
        expect(RenderComponent.find('button').exists()).toBe(true)
    })



    it('matches snapshot', () => {
        const RenderComponent = shallow(<ContactComponent ></ContactComponent>)
        expect(RenderComponent).toMatchSnapshot()
    })
})