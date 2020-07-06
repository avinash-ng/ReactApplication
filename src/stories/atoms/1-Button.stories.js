import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../components/atoms/Button/Button';

export default {
  title: 'Button',
  component: Button,
};
var name=   <span role="img" aria-label="so cool">
                  😀 😎 👍 💯
            </span>
export const Text = () => <Button onClicked={action('clicked')} buttonName="click me"></Button>;

export const Emoji = () => (
  <Button onClicked={action('clicked')} buttonName={name}>
  
  </Button>
);
