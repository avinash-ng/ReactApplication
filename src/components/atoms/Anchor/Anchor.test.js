import Anchor from './Anchor'
import expect from 'expect'
import { shallow, configure } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer'
import { render } from '@testing-library/react';

configure({ adapter: new Adapter() });
describe('<Anchor /> ', () => {
    it('renders anchor element', () => {
        
        const RenderComponent = shallow(
            <Anchor ></Anchor>
        );
        // console.log(RenderComponent)
        expect(RenderComponent.exists()).toBe(true)
    })

    it('recieved props correctly', () => {
        const name = "click me";
        const ref = "https://www.facebook.com"
        const ref1 = "https://www.google.com"
        const { getByText } = render(<Anchor name={name} href={ref}></Anchor>)
        // console.log(RenderComponent)
        expect(getByText('click me').closest("a")).toHaveAttribute('href', ref)
    })


    it('Matches snapshot', () => {
        const name = "click me";
        const ref = "https://www.facebook.com"
        const render = shallow(<Anchor name={name} href={ref} ></Anchor>)
        expect(render).toMatchSnapshot()
    })
})