const { shallow, configure, mount } = require("enzyme")
import FrontComponent from "./FrontComponent"
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { ListItem, AppBar } from '@material-ui/core'
import { useAuth0 } from '../../../react-auth0-spa'
import DrawerComponent from '../../template/pagestemplate/DrawerComponent' 

configure({ adapter: new Adapter() });
const user = {
    email: "av@gmail.com",
    email_verified: true,
    sub: "google-oauth2|12345678901234"
}
jest.mock("../../../react-auth0-spa");
describe('testing <FrontComponent /> ', () => {
    beforeEach(() => {
        // Mock the Auth0 hook and make it return a logged in state
        useAuth0.mockReturnValue({
            isAuthenticated: true,
            user,
            logout: jest.fn(),
            loginWithRedirect: jest.fn()
        });
    });

    it('renders <DrawerCOmponent />  correctly', () => {

        const RenderComponent = mount(<FrontComponent> </FrontComponent>)
        expect(RenderComponent.find(DrawerComponent).exists()).toBe(true)
    })


    it('matches snapshot', () => {
        const RenderComponent = shallow(<FrontComponent ></FrontComponent>)
        expect(RenderComponent).toMatchSnapshot()
    })
})