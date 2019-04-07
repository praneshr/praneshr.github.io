import React from 'react'
import { css } from '@emotion/core'
import { variables } from '../../styles'

const rightIcon = (theme) => css({
  opacity: 0,
  transform: 'translate3d(-20px, 0, 0)',
  transition: 'all 0.1s ease',
  g: {
    fill: theme.textLight,
    stroke: theme.textLight,
  },
  polyline: {
    stroke: theme.textLight,
  },
})

const content = (theme) => {
  return css({
    borderRadius: 4,
    padding: 20,
    border: `1px solid ${theme.borderGrey}`,
    marginBottom: 20,
    position: 'relative',
    minHeight: 153,
    background: theme.cardBackground,
    '&:before': {
      content: '" "',
      width: 15,
      height: 3,
      backgroundColor: theme.primary,
      position: 'absolute',
      top: -1,
      transition: 'all 0.1s ease',
    },
    '&:hover': {
      'svg': {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
      },
      '&:before': {
        width: 50,
      },
    },
  })
}

const description = (theme) => css({
  lineHeight: '21px',
  color: theme.textLight,
  fontSize: 14,
  margin: 0,
  textDecoration: 'none',
})
const title = (theme) => css({
  fontWeight: 500,
  margin: 0,
  color: theme.textDefault,
  textDecoration: 'none',
})
const header = () => css({
  display: 'flex',
  margin: '0 0 10px 0',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const Tile = (props) => {
  return (
    <div css={content} style={{ minHeight: props.minHeight }}>
      <div css={header}>
        <h4 css={title}>{props.title}</h4>
        <svg height={18} width={18} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" css={rightIcon}>
          <title>arrow right</title>
          <g strokeLinecap="round" strokeWidth="3">
            <line fill="none" x1="2" x2="22" y1="12" y2="12"/>
            <polyline fill="none" points="15,5 22,12 15,19 " />
          </g>
        </svg>
      </div>
      <p css={description}>{props.description}</p>
    </div>
  )
}

export default Tile
