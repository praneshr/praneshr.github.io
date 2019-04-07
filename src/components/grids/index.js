import React from 'react'
import { css } from '@emotion/core'

const row = () => css({
  margin: '0 -10px',
  '&:after': {
    content: '" "',
    display: 'table',
    clear: 'both',
  },
})

const grid = () => css({
  width: '50%',
  padding: '0 10px',
  float: 'left',
})

const Row = ({ children }) => {
  return (
    <div css={row}>
      {children}
    </div>
  )
}

const Grid = ({ children }) => {
  return (
    <div css={grid}>
      {children}
    </div>
  )
}

export {
  Row,
  Grid,
}
