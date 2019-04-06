import React from 'react'
import { css } from '@emotion/core'
import {variables} from '../../styles'

const content = css({
  borderRadius: 4,
  padding: 20,
  border: `1px solid ${variables.borderGrey}`,
  marginBottom: 20,
  position: 'relative',
  minHeight: 153,
  '&:before': {
    content: '" "',
    width: 15,
    height: 3,
    backgroundColor: variables.primary,
    position: 'absolute',
    top: -1,
    transition: 'all 0.1s ease',
  },
  '&:hover': {
    '&:before': {
      width: 50,
    },
  },
})
const description = css({
  lineHeight: '21px',
  color: variables.textLight,
  fontSize: 14,
  margin: 0,
  textDecoration: 'none',
})
const title = css({
  fontWeight: 500,
  margin: '0 0 10px 0',
  color: variables.textDefault,
  textDecoration: 'none',
})

const Tile = (props) => {
  return (
    <div css={content} style={{minHeight: props.minHeight}}>
      <h4 css={title}>{props.title}</h4>
      <p css={description}>{props.description}</p>
    </div>
  )
}

export default Tile
