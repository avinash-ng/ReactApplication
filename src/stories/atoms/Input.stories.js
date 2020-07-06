import { Input } from "@material-ui/core"
import React from 'react'
import {withKnobs, text} from '@storybook/addon-knobs'
export default {
    component: Input,
    title: 'input',
    decorators: [withKnobs]
}

const type = text('type', "text")
const name = text("first name", 'avinash')
const placeholder = "enter your value...."
export const Default = () => <Input type={type} name={name} placeholder={placeholder}> </Input>