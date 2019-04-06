import React from 'react'
import { css } from '@emotion/core'
import { variables } from '../../styles'

const infoContainer = css({
  marginTop: '40vh',
})
const bannerTitle = css({
  fontSize: 68,
  fontWeight: 800,
  margin: 0,
  lineHeight: 1,
})
const description = css({
  marginTop: 30,
  fontSize: 18,
  lineHeight: '28px',
  fontWeight: 400,
})
const gradient = css({
  width: '100%',
  height: '50vh',
  position: 'absolute',
  top: 0,
  left: 0,
  background: variables.pageGradient,
  zIndex: -1,
})

const BasicInfo = () => {
  return (
    <div css={infoContainer}>
      <div css={gradient}></div>
      <h1 css={bannerTitle}>Hi, I'm Pranesh!</h1>
      <p css={description}>
        I’m a UI/UX designer and a Frontend Developer based in Bangalore, India.
        I’ve nearly 4 years of industry experience in designing and developing
        highly scalable web products. Currently, I work for
        <a href="https://about.google" target="_blank"> Google</a> as a User Experience Engineer
        on their cloud platform.
      </p>
        <p css={description}>
          I specailize in React JS, Node JS and Sketch. I care a lot about user
          experience, minimalism, reusability and clean code.
      </p>
    </div>
  )
}

export default BasicInfo
