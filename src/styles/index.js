import { css } from '@emotion/core'
import fonts from './_fonts'
import variables from './_variables'

const globalStyles = css({
  body: {
    height: '100%',
    'font-family': '"mp", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  },
  '*': {
    'box-sizing': 'border-box',
  },
  a: {
    color: 'inherit',
    'text-decoration': 'none',
  },
})

export {
  globalStyles,
  fonts,
  variables,
}
