import React from 'react'
import ImageTag from '../../../src/components/atoms/ImageTag/ImageTag'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from "@storybook/addon-knobs";
import {object as Object} from '@storybook/addon-knobs'
export default {
    component: ImageTag,
    title: 'image-tag',
    decorators: [withKnobs]
}
const name = text('name', 'open')
const object = {
    'name': name
}
const className = text("ClassName", "heading-h3")
const onClicked = action("clicked heading")

export const Default = () => < ImageTag object={object} className={className} onClicked={onClicked}> </ImageTag>