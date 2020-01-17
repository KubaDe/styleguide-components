import React, { useState } from 'react'

import Box from 'components/simpleUi/Box'

import SidebarMenu from '../'

export default {
  title: 'layout|SidebarMenu',
}

export const Basic = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Box height="200vh" backgroundColor="secondaries.200">
            <SidebarMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
        </Box>
    );
}
