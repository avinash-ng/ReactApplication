import React from 'react'
import { action } from '@storybook/addon-actions'
import Title from '../../components/atoms/Title/Title'
export default {
    component: Title,
    title: 'Title'
}

export const defaultone = () => <Title />

export const withprops = () => <Title name="Max"/>