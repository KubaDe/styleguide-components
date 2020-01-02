import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import { initDecorators } from './decorators'

configure(require.context('../', true, /__stories__\/index\.tsx$/), module)

initDecorators()
