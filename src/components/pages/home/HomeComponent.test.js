const { shallow, configure, mount } = require("enzyme")
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { useAuth0 } from '../../../react-auth0-spa'
import DrawerComponent from "../../template/pagestemplate/DrawerComponent";
import { ContentComponent } from './HomeComponent'
import HomeComponent from "./HomeComponent";
import { render } from '@testing-library/react';
configure({ adapter: new Adapter() });
const user = {
    email: "av@gmail.com",
    email_verified: true,
    sub: "google-oauth2|12345678901234"
}
jest.mock("../../../react-auth0-spa");
describe('testing <HomeComponent /> ', () => {
    beforeEach(() => {
        // Mock the Auth0 hook and make it return a logged in state
        useAuth0.mockReturnValue({
            isAuthenticated: true,
            user,
            logout: jest.fn(),
            loginWithRedirect: jest.fn()
        });
    });

    it('renders <DrawerComponent />  correctly', () => {

        const RenderComponent = mount(<HomeComponent> </HomeComponent>)
        expect(RenderComponent.find(DrawerComponent).exists()).toBe(true)
    })

    it('renders <ContentConponent />  correctly', () => {

        const RenderComponent = mount(<HomeComponent> </HomeComponent>)
        expect(RenderComponent.find(ContentComponent).exists()).toBe(true)
    })

    it('render test properly', () => {
        const { getByText } = render(<HomeComponent> </HomeComponent>)
        expect(getByText('Welcome to home page')).toBeInTheDocument()
    })
    
    it('matches snapshot', () => {
        const RenderComponent = shallow(<HomeComponent ></HomeComponent>)
        expect(RenderComponent).toMatchSnapshot()
    })
})