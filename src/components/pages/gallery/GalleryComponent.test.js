const { shallow, configure, mount } = require("enzyme")
import GalleryComponent from "./GalleryComponent"
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { useAuth0 } from '../../../react-auth0-spa'
import DrawerComponent from "../../template/pagestemplate/DrawerComponent";
import {ContentComponent} from './GalleryComponent'
configure({ adapter: new Adapter() });
const user = {
    email: "av@gmail.com",
    email_verified: true,
    sub: "google-oauth2|12345678901234"
}
jest.mock("../../../react-auth0-spa");
describe('testing <GalleryComponent /> ', () => {
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

        const RenderComponent = mount(<GalleryComponent> </GalleryComponent>)
        expect(RenderComponent.find(DrawerComponent).exists()).toBe(true)
    })

    it('renders <ContentConponent />  correctly', () => {

        const RenderComponent = mount(<GalleryComponent> </GalleryComponent>)
        expect(RenderComponent.find(ContentComponent).exists()).toBe(true)
    })

    it('matches snapshot', () => {
        const RenderComponent = shallow(<GalleryComponent ></GalleryComponent>)
        expect(RenderComponent).toMatchSnapshot()
    })
})