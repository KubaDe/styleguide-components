import React from 'react'
import Grid, { GridItem } from '../index'

export default {
  title: 'Simple-UI|Grid',
}

export const simpleFlex = () => (
  <Grid
    height="400px"
    width="400px"
    gridTemplateRows="40px 20% 1fr"
    gridTemplateColumns="110px 1fr 20px"
    gridGap="10px"
    gridTemplateAreas={`
        "a b f"
        "c c f"
        "d e f"
    `}
  >
    <GridItem background="green" gridArea="c" />
    <GridItem background="red" gridArea="a" />
    <GridItem background="blue" gridArea="e" />
    <GridItem background="pink" gridArea="d" />
    <GridItem background="black" gridArea="b" />
    <GridItem background="brown" gridArea="f" />
  </Grid>
)
