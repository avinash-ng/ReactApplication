import React from 'react'
import Image from '../../components/atoms/Image/Image'
import { withKnobs, text } from '@storybook/addon-knobs'
import logo from '../../logo.svg'
export default {
    title: 'Image',
    component: Image,
    decorators: [withKnobs]
}

const imageName = text('imgsrc', logo)
export const Default = () => <Image altText="error in loading..."></Image>


export const WithSrc = () => <Image altText="error in loading...." imageName={imageName}></Image>
