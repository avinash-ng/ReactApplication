import DropDownList from './DropDownList'
import expect from 'expect'
import sinon from 'sinon';
import { shallow, configure, mount } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { Button } from '@material-ui/core';
import ImageTag from '../../atoms/ImageTag/ImageTag'
import MiUiButton from '../../atoms/Button/MiUiButton'
import Title from '../../atoms/Title/Title';
import Label from '../../atoms/Label/Label';
import TextArea from '../../atoms/Textarea/TextArea';
import { render } from '@testing-library/react'
const names = ['edit', 'delete', 'update']
const values = ['edit', 'delete', 'update']
const compId = "id"
let compName = "selectComp"
configure({ adapter: new Adapter() });
describe('<DropDownList /> ', () => {
    it('renders <select /> element properly', () => {
        const RenderComponent = shallow(
            <DropDownList values={values} names={names}></DropDownList>
        );
        // console.log(RenderComponent)
        expect(RenderComponent.find('select').exists()).toBe(true)
    })

    it('Matches snapshot', () => {
        const RenderComponent = shallow(<DropDownList values={values} names={names}> </DropDownList>)
        expect(RenderComponent).toMatchSnapshot()
    })
})