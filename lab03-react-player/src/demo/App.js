import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { hot } from 'react-hot-loader'

import './reset.css'
import './defaults.css'
import './range.css'
import './App.css'

//import PlayerContainer from '../PlayerContainer'
import PlayerContainer from '../conmponets/ReactPlayer'
class App extends Component {
  state = {
    url: null,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  }
  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    })
  }
  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }
  stop = () => {
    this.setState({ url: null, playing: false })
  }
  toggleControls = () => {
    const url = this.state.url
    this.setState({
      controls: !this.state.controls,
      url: null
    }, () => this.load(url))
  }
  toggleLight = () => {
    this.setState({ light: !this.state.light })
  }
  toggleLoop = () => {
    this.setState({ loop: !this.state.loop })
  }
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }
  setPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }
  togglePIP = () => {
    this.setState({ pip: !this.state.pip })
  }
  onPlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }
  onPause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }
 
  
  onProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    //if (!this.state.seeking) {
      this.setState(state)
    //}
  }
  onEnded = () => {
    console.log('onEnded')
    this.setState({ playing: this.state.loop })
  }
  renderLoadButton = (url, label) => {
    return (
      <button onClick={() => this.load(url)}>
        {label}
      </button>
    )
  }
  ref = player => {
    this.player = player
  }
  render () {
    const { url, playing, controls,  volume, muted,  played,   playbackRate } = this.state
    const SEPARATOR = ' · '

    return (
      <div className='app'>
        <section className='section'>
          <h1>Video Player </h1>
          <div className='player-wrapper'>
            <PlayerContainer
              ref={this.ref}
              className='react-player'
              width='100%'
              height='100%'
              url={url}            
              playing={playing}
              controls={controls}                           
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')}
              onPlay={this.onPlay}             
              onPause={this.onPause}
              onBuffer={() => console.log('onBuffer')}              
              onEnded={this.onEnded}
              onError={e => console.log('onError', e)}
              onProgress={this.onProgress}
              onDuration={this.onDuration}
            />
          </div>

          <table><tbody>
            <tr>
              <th>Controls</th>
              <td>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</button>              
              </td>
            </tr>            
            
            <tr>
              <th>Volume</th>
              <td>
                <input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
              </td>
            </tr>          
            <tr>
              <th>
                <label htmlFor='muted'>Muted</label>
              </th>
              <td>
                <input id='muted' type='checkbox' checked={muted} onChange={this.toggleMuted} />
              </td>
            </tr>
           
        
            <tr>
              <th>Played</th>
              <td><progress max={1} value={played} /></td>
            </tr>          
          </tbody></table>
        </section>
        <section className='section'>
          <table><tbody>                                             
            <tr>
              <th>Video Files</th>
              <td>
                {this.renderLoadButton('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', 'TestA')}               
              </td>
              <td>
                {this.renderLoadButton('http://vjs.zencdn.net/v/oceans.mp4', 'Test1')}               
              </td>
              <td>
                {this.renderLoadButton('https://www.w3cschool.cn/statics/demosource/movie.mp4', 'TestB')}               
              </td>
             
            </tr>
            <tr>
              <th>Add new Video URL</th>
              <td>
                <input ref={input => { this.urlInput = input }} type='text' placeholder='Enter URL' />
                <button onClick={() => this.setState({ url: this.urlInput.value })}>Load</button>
              </td>
            </tr>
          </tbody></table>

      

          <table><tbody>
            <tr>
              <th>url:</th>
              <td className={!url ? 'faded' : ''}>
                {(url instanceof Array ? 'Multiple' : url) || '-'}
              </td>
            </tr>

            
          </tbody></table>
        </section>
        <footer className='footer'>
         training
        </footer>
      </div>
    )
  }
}

export default hot(module)(App)
