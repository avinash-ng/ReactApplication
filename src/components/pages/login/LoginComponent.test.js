const { shallow, configure, mount } = require("enzyme")
import LoginComponent from "./LoginComponent"
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { useAuth0 } from '../../../react-auth0-spa'
import DrawerComponent from "../../template/pagestemplate/DrawerComponent";
import { ContentComponent } from './LoginComponent'
configure({ adapter: new Adapter() });
const user = {
    email: "av@gmail.com",
    email_verified: true,
    sub: "google-oauth2|12345678901234"
}
jest.mock("../../../react-auth0-spa");
describe('testing <LoginComponent /> ', () => {
    beforeEach(() => {
        // Mock the Auth0 hook and make it return a logged in state
        useAuth0.mockReturnValue({
            isAuthenticated: true,
            user,
            logout: jest.fn(),
            loginWithRedirect: jest.fn()
        });
    });

    it('renders head-div  correctly', () => {

        const RenderComponent = mount(<LoginComponent> </LoginComponent>)
        expect(RenderComponent.find('.head-div').exists()).toBe(true)
    })

    it('renders button-div  correctly', () => {

        const RenderComponent = mount(<LoginComponent> </LoginComponent>)
        expect(RenderComponent.find('.button-div').exists()).toBe(true)
    })

    
    it('matches snapshot', () => {
        const RenderComponent = shallow(<LoginComponent ></LoginComponent>)
        expect(RenderComponent).toMatchSnapshot()
    })
})