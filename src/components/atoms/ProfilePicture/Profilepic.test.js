import ProfilePic from './ProfilePic'
import expect from 'expect'
import sinon from 'sinon';
import { shallow, configure } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer'
import { render } from '@testing-library/react';

configure({ adapter: new Adapter() });
describe('<ProfilePic /> ', () => {
    it('renders ProfilePic element', () => {
        const RenderComponent = shallow(
            <ProfilePic ></ProfilePic>
        );
        // console.log(RenderComponent)
        expect(RenderComponent.exists()).toBe(true)
    })

    it('recieved props correctly', () => {
        const alt = "Error in loading..."
        const srcImage = "photo.png"
        const RenderComponent = shallow(<ProfilePic imageName={srcImage} altText={alt}></ProfilePic>)
        expect(RenderComponent.find('img').prop('alt')).toEqual(alt)

    })


    it('Matches snapshot', () => {
       
            const RenderComponent = shallow(<ProfilePic></ProfilePic>)
            expect(RenderComponent).toMatchSnapshot()
    
    })
})