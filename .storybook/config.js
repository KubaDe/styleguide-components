import { configure } from '@storybook/react';

configure(require.context('../', true, /__stories__\/index\.tsx$/), module)
