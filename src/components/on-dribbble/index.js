import React from 'react'
import { css } from '@emotion/core'
import { Row, Grid } from '../grids'
import data from './content'
import {variables} from '../../styles'

const onGithub = css({
})
const content = css({
  marginBottom: 20,
  boxShadow: variables.cardShadow,
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
    <div css={onGithub}>
      <Row>
        {contentNode}
      </Row>
    </div>
  )
}

export default OnGithub
