import {addDecorator} from "@storybook/react";

import themeDecorator from './themeDecorator'

export const initDecorators = () => {
    addDecorator(themeDecorator);
}
