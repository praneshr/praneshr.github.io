import React from 'react'
import { css } from '@emotion/core'

const infoContainer = () => css({
  marginTop: '40vh',
})
const bannerTitle = () => css({
  fontSize: '4rem',
  fontWeight: 800,
  margin: 0,
  lineHeight: 1,
})
const description = () => css({
  marginTop: 30,
  fontSize: 18,
  lineHeight: '28px',
  fontWeight: 400,
})
const gradient = (theme) => css({
  width: '100%',
  height: theme.gradientHeight,
  position: 'absolute',
  top: 0,
  left: 0,
  background: theme.pageGradient,
  transition: 'all 0.1s ease',
  zIndex: -1,
})
const links = () => css({
  marginTop: 50,
})
const link = () => css({
  marginRight: 30,
  fontWeight: 600,
  '&:after': {
    content: 'none',
  },
})

const BasicInfo = () => {
  return (
    <div css={infoContainer}>
      <div css={gradient}></div>
      <h1 css={bannerTitle}>Hi, I'm Pranesh!</h1>
      <p css={description}>
        I’m a UI/UX Designer and a Frontend Developer based in Bangalore, India.
        I’ve nearly 4 years of industry experience in designing and developing
        highly scalable web products. Currently, I work for <a href="https://about.google" target="_blank">Google</a> as
        a User Experience Engineer on their cloud platform.
      </p>
        <p css={description}>
          I specailize in React JS, Node JS and Sketch. I care a lot about user
        experience, minimalism, reusability and clean code.
      </p>
      <div css={links}>
        <a href="https://github.com/praneshr" css={link} target="_blank" style={{ color: '#333' }}>Github</a>
        <a href="https://praneshr.dribbble.com/" css={link} target="_blank" style={{ color: '#ea4c89' }} >Dribbble</a>
        <a href="https://blog.praneshravi.in/" css={link} target="_blank" style={{ color: '#00ab6c' }}>Medium</a>
        <a href="https://stackoverflow.com/users/4945468/pranesh-ravi" css={link} target="_blank" style={{ color: '#f48024' }}>Stackoverflow</a>
        <a href="https://www.linkedin.com/in/pranesh-ravi/" css={link} target="_blank" style={{ color: '#0077b5' }}>LinkedIn</a>
      </div>
    </div>
  )
}

export default BasicInfo
