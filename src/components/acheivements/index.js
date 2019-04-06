import React from 'react'
import { Row, Grid } from '../grids'
import data from './content'
import Tile from '../tile'

const Acheivements = () => {
  const contentNode = data.map((data, i) => {
    return (
      <a href={data.link} target="_blank">
        <Grid>
          <Tile
            title={data.title}
            description={data.description}
            minHeight={140}
          />
        </Grid>
      </a>
    )
  })
  return (
    <Row>
      {contentNode}
    </Row>

  )
}

export default Acheivements
