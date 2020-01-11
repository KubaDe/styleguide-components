import React from 'react'
import Text from 'components/simpleUi/Text'


export default {
  title: 'Theme|FontSizes',
}

export const SizeIndex = () => (
  <>
    <Text fontSize={1}>Font Size "1"</Text>
    <Text fontSize={2}>Font Size "2"</Text>
    <Text fontSize={3}>Font Size "3"</Text>
    <Text fontSize={4}>Font Size "4"</Text>
    <Text fontSize={5}>Font Size "5"</Text>
    <Text fontSize={6}>Font Size "6"</Text>
    <Text fontSize={7}>Font Size "7"</Text>
    <Text fontSize={8}>Font Size "8"</Text>
  </>
)

export const SizeAlias = () => (
  <>
    <Text fontSize={'h1'}>Font Alias "h1"</Text>
    <Text fontSize={'h2'}>Font Alias "h2"</Text>
    <Text fontSize={'h3'}>Font Alias "h3"</Text>
    <Text fontSize={'h4'}>Font Alias "h4"</Text>
    <Text fontSize={'h5'}>Font Alias "h5"</Text>
    <Text fontSize={'h6'}>Font Alias "h6"</Text>
  </>
)
