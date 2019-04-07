import React from 'react'
import { css } from '@emotion/core'
import { Row, Grid } from '../grids'
import data from './content'

const content = (theme) => css({
  marginBottom: 20,
  boxShadow: theme.cardShadow,
  borderRadius: 4,
  overflow: 'hidden',
  lineHeight: 0,
  img: {
    width: '100%',
    objectFit: 'cover',
    lineHeight: 0,
  }
})

const OnGithub = () => {
  const contentNode = data.map((data, i) => {
    return (
      <Grid key={i}>
        <div css={content}>
          <img src={data.link}/>
        </div>
      </Grid>
    )
  })
  return (
    <Row>
      {contentNode}
    </Row>
  )
}

export default OnGithub
