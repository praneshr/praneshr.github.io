import React from "react"

import SEO from '../components/seo'
import Layout from '../components/layout'
import Section from '../components/section'
import { css, Global } from '@emotion/core'
import { fonts, globalStyles } from '../styles'

import OnGithub from '../components/on-github'
import OnDribbble from '../components/on-dribbble'
import BasicInfo from '../components/basic-info'
import FloatingIcons from '../components/floating-icons'
import Acheivements from '../components/acheivements'

const main = css({
  margin: '0 100px',
  maxWidth: 800,
})

const divider = (theme) => css({
  height: 1,
  width: '100%',
  marginTop: 100,
  background: theme.divider,
})

const work = (theme) => css({
  color: theme.textLight,
  marginTop: 20,
  fontSize: 14,
})

const copy = () => css({
  padding: '30px 0 30px 100px',
})

const IndexPage = () => {
  const date = new Date()
  date.getFullYear()
  return (
    <Layout>
      <Global styles={fonts} />
      <Global styles={globalStyles} />
      <SEO title="Pranesh Ravi | UX Engineer at Google" />
      <main css={main}>
        <FloatingIcons />
        <BasicInfo />
        <Section title="On Github">
          <OnGithub />
        </Section>
        <Section title="On Dribbble">
          <OnDribbble />
        </Section>
        <Section title="Acheivements">
          <Acheivements />
        </Section>
      </main>
      <div css={divider} />
      <div css={copy}>
        <p>© {date.getFullYear()} Pranesh Ravi</p>
        <p css={work}>
          Built with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a>. Hosted in Github Pages. Code is licensed under MIT and available at Github.
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
