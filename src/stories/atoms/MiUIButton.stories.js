import React from 'react'
import { action } from '@storybook/addon-actions'
import MiUiButton from '../../components/atoms/Button/MiUiButton';
import { blue } from '@material-ui/core/colors';
import { linkTo } from '@storybook/addon-links'


export default {
    title: 'MiUiButton',
    component: MiUiButton
}

var stylesOfContainedVariant = {
    fontSize: '20px',
    backgroundColor: 'blue',
    color: 'white'

     
}

var stylesOfOutlinedVariant = {
    fontSize: '15px',
    backgroundColor: 'red',
    color: 'white'
}

export const containedvariant = () => <MiUiButton style={stylesOfContainedVariant} variant="contained" onClick={action('clicked contained variant')} buttonName="click me"></MiUiButton>

export const outlinedvariant = () => <MiUiButton style={stylesOfOutlinedVariant} variant="outlined" onClick={action('clicked outlined variant')} buttonName="click me"></MiUiButton>

export const textvariant = () => <MiUiButton variant="text" onClick={linkTo('Title', 'Withprops')} buttonName="login"></MiUiButton>