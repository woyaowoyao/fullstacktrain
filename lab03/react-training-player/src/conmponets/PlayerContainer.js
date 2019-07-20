import React, { Component } from 'react'

import { propTypes, defaultProps, DEPRECATED_CONFIG_PROPS } from './props'
import { getConfig, omit, isEqual } from './utils'
import Player from './Player'
import { PlayerItem } from './PlayerItem'

const SUPPORTED_PROPS = Object.keys(propTypes)

let customPlayers = []

export default class PlayerContainer extends Component {
  static addCustomPlayer = player => {
    customPlayers.push(player)
  }
  static removeCustomPlayers = () => {
    customPlayers = []
  }
  static displayName = 'Video-Player'
  static propTypes = propTypes
  static defaultProps = defaultProps
  static canPlay = url => {
    for (let Player of [ ...customPlayers ]) {
      if (Player.canPlay(url)) {
        return true
      }
    }
    return false
  }
 
  config = getConfig(this.props, defaultProps, true)
  state = {
    showPreview: !!this.props.light
  }
  componentDidMount () {
    if (this.props.progressFrequency) {
      const message = 'progress....'
      console.warn(message, 'font-weight: bold', '', 'font-weight: bold', '')
    }
  }
  shouldComponentUpdate (nextProps, nextState) {
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState)
  }
  componentWillUpdate (nextProps) {
    this.config = getConfig(nextProps, defaultProps)
    if (!this.props.light && nextProps.light) {
      this.setState({ showPreview: true })
    }
  }
  onClickPreview = () => {
    this.setState({ showPreview: false })
  }
  getDuration = () => {
    if (!this.player) return null
    return this.player.getDuration()
  }
  getCurrentTime = () => {
    if (!this.player) return null
    return this.player.getCurrentTime()
  }
  getSecondsLoaded = () => {
    if (!this.player) return null
    return this.player.getSecondsLoaded()
  }
  getInternalPlayer = (key = 'player') => {
    if (!this.player) return null
    return this.player.getInternalPlayer(key)
  }
  seekTo = (fraction, type) => {
    if (!this.player) return null
    this.player.seekTo(fraction, type)
  }
  onReady = () => {
    this.props.onReady(this)
  }
  getActivePlayer (url) {
   
    return PlayerItem
  }
  wrapperRef = wrapper => {
    this.wrapper = wrapper
  }
  activePlayerRef = player => {
    this.player = player
  }
  renderActivePlayer (url, activePlayer) {
    if (!url) return null
    return (
      <Player
        {...this.props}
        key={activePlayer.displayName}
        ref={this.activePlayerRef}
        config={this.config}
        activePlayer={activePlayer}
        onReady={this.onReady}
      />
    )
  }
  sortPlayers (a, b) {
    
    if (a && b) {
      return a.key < b.key ? -1 : 1
    }
    return 0
  }
  render () {
    const { url, controls, style, width, height, light, wrapper: Wrapper } = this.props
    const showPreview = this.state.showPreview && url
    const otherProps = omit(this.props, SUPPORTED_PROPS, DEPRECATED_CONFIG_PROPS)
    const activePlayer = this.getActivePlayer(url)
    const renderedActivePlayer = this.renderActivePlayer(url, activePlayer)
   // const preloadPlayers = renderPreloadPlayers(url, controls, this.config)
    const players = [ renderedActivePlayer ].sort(this.sortPlayers)
   // const preview = <Preview url={url} light={light} onClick={this.onClickPreview} />
    return (
      <Wrapper ref={this.wrapperRef} style={{ ...style, width, height }} {...otherProps}>
        {players}
      </Wrapper>
    )
  }
}

//export { default as PlayerItem } from './PlayerItem'
