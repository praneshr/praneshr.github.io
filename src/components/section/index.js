import React from 'react'
import { css } from '@emotion/core'

const content = css({
  marginTop: 30,
})
const section = css({
  marginTop: 100,
})

const Section = ({ title, children }) => {
  return (
    <div css={section}>
      <h3>{title}</h3>
      <div css={content}>
        {children}
      </div>
    </div>
  )
}

export default Section
