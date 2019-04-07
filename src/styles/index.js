import { css } from '@emotion/core'
import fonts from './_fonts'
import variables from './_variables'

const globalStyles = (theme) => css({
  html: {
    overflowX: 'hidden',
  },
  body: {
    height: '100%',
    fontFamily: '"mp", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    background: theme.background,
    color: theme.textDefault,
    transition: 'color 0.1s ease',
  },
  '*': {
    boxSizing: 'border-box',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
    position: 'relative',
    fontWeight: 600,
    '&:after': {
      content: '" "',
      position: 'absolute',
      height: 3,
      width: '100%',
      backgroundColor: theme.primary,
      bottom: -4,
      left: 0,
    },
  },
})

export {
  globalStyles,
  fonts,
  variables,
}
