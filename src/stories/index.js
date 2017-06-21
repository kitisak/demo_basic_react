import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Navigation from '../components/Navigation'
import Home from '../components/Home'
import Foods from '../components/Foods'
import Vodka from '../components/Vodka'


storiesOf('Navigation', module)
  .add('Navigation section', () => (<Navigation/>));

storiesOf('Home', module)
  .add('Home page', () => (<Home/>));

storiesOf('Foods', module)
  .add('List of food', () => (<Foods/>));

storiesOf('Vodka', module)
  .add('List of Vodka', () => (<Vodka/>));
