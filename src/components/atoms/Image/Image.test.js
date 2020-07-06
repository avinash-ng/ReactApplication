import Image from './Image'
import expect from 'expect'
import sinon from 'sinon';
import { shallow, configure, mount } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer'
import { render } from '@testing-library/react';

configure({ adapter: new Adapter() });
describe('<Image /> ', () => {
    
    
    // it('renders alt text', () => {
    //     const RenderComponent = mount(
    //         <Image imageName="max.png" altText="alternate text..."></Image>
    //     );
    //     // const image = getByTestId("image")
    //     console.log(RenderComponent.find('img'))
    //     expect(RenderComponent)
    // })

    
    it('recieved props correctly', () => {
        const alt = "Error in loading..."
        const srcImage = "photo.png"
        const RenderComponent = shallow(<Image imageName={srcImage} altText={alt}></Image>)
        expect(RenderComponent.find('img').prop('alt')).toEqual(alt)

    })


    it('Matches snapshot', () => {
        const imageName = "max.png"
        const altText="Error loading max..."
        const RenderComponent = shallow(<Image imageName={imageName} altText = {altText}></Image>)
        expect(RenderComponent).toMatchSnapshot()
    
    })

})