import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { configure, addDecorator, addParameters } from '@storybook/react';
import centered from '@storybook/addon-centered/react'
// automatically import all files ending in *.stories.js

import GlobalStyle from '../src/styles/global';
import theme from './customTheme'

const withGlobal = (Story) => (
  <>
    <Story/>
    <GlobalStyle/>
  </>
);
addParameters({
  options:{
    theme,
  }
})


addDecorator(withInfo); //permite documentar facilmente 
addDecorator(centered);
addDecorator(withGlobal);




configure(require.context('../stories', true, /\.stories\.js$/), module);



