import React, { Component } from 'react'
import { css } from '@emotion/core'
import icons from './icons'
import { variables } from '../../styles'
import { withTheme } from 'emotion-theming'

const sceneRef = React.createRef()

const scene = () => css({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 10,
  height: '40vh',
  width: '100%',
})

const iconStyles = (theme) => css({
  borderRadius: '100%',
  position: 'absolute',
  transition: 'all 0.2s linear',
  boxShadow: theme.iconShadow,
  backgroundSize: '60px 60px',
  backgroundColor: theme.iconBackground,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  transform: 'scale3d(0, 0, 0)',
  width: 120,
  height: 120,
})

class FloatingIcons extends Component {

  componentDidMount() {
    const grids = window.innerWidth / 200
    this.nodeCounter = 0
    this.numberOfIcons = grids > icons.length ? icons.length : grids
    this.addNodes(true)
  }

  addNodes = (firstLoad = false) => {
    const spacing = 100 / this.numberOfIcons
    const iconMap = icons.slice()
    const { height } = sceneRef.current.getBoundingClientRect();
    const midPoint = height / 2
    for (let i = 0; i < this.numberOfIcons; i++) {
      const isEven = i % 2
      const iconTop = this.computeRandomPoint(
        isEven ? 120 : midPoint,
        isEven ? midPoint : height
      );
      const iconIndex = this.computeRandomPoint(0, iconMap.length - 1, true)
      const iconInfo = iconMap.splice(iconIndex, 1)[0]
      const delay = this.computeRandomPoint(1, 2);
      const icon = document.createElement('div')
      icon.style = iconStyles(this.props.theme).styles
      icon.style.backgroundImage = `url(${iconInfo.light})`
      icon.style.top = `${iconTop - 120}px`
      icon.style.left = `${(spacing * i) + 1.2}%`
      icon.style.transitionDelay = `${delay}s`
      if (firstLoad) {
        icon.style.transform = `scale3d(1, 1, 1)`
      } else {
        window.setTimeout(() => {
          icon.style.transform = `scale3d(1, 1, 1)`
        }, 0)
      }
      window.setTimeout(() => {
        icon.addEventListener('transitionend', () => {
          sceneRef.current.removeChild(icon)
          this.nodeCounter -= 1
          if (this.nodeCounter === 0) {
            this.addNodes()
          }
        })
        icon.style.transform = `scale3d(0, 0, 0)`
      }, 5000)
      sceneRef.current.append(icon)
      this.nodeCounter += 1
    }
  }

  computeRandomPoint = (start, end, shouldFloor = false) => {
    const val = Math.random() * (end - start) + start
    return shouldFloor ? Math.floor(val) : val
  }

  render () {
    return (
      <div css={scene} ref={sceneRef} />
    )
  }
}

export default withTheme(FloatingIcons)
