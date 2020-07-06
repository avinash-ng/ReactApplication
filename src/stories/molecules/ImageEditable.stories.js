
import React from 'react'
import ImageEditable from "../../components/molecules/Image/ImageEditable";
import {withKnobs, text} from '@storybook/addon-knobs'
import { boolean } from "../atoms/MiUIButton.stories";

export default {
    component: ImageEditable,
    title: 'ImageEditable',
    decorators: [withKnobs]
}


var obj = {
    'selected': true,
    'image_id': 18,
    'user_id': 2,
    'path': 'upload/Screenshot from 2020-05-25 11-57-43.png',
    'name': 'Screenshot from 2020-05-25 11-57-43.png'
}


var buttonName = "click me"
export const Default = () => (
    <ImageEditable className='heading'  object={obj} buttonName={buttonName}></ImageEditable>
)