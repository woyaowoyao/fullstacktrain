import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { hot } from 'react-hot-loader'

import './reset.css'
import './defaults.css'
import './range.css'
import './App.css'

import PlayerContainer from '../conmponets/PlayerContainer'
class App extends Component {
  state = {
    url: null,
    title:'video',
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    likeCount:1,
    unlikeCount:0,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    playLists:[],
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
  componentDidMount () {
    const jsonUrl ='http://localhost:3000/courses?_sort=id&_order=desc';    
    fetch(jsonUrl,{
      method:'GET',
      headers:{
        'Content-Type':'application/json;charset=UTF-8'
      },
      mode:'cors',
      cache:'default'
    })
     .then(res =>res.json())
     .then((data) => {
       console.log("fetch data:"+data)  
       this.setState({
         playLists:data
       },function(){
         console.log(this.state.playLists);    
       })
     }) 
      const message = 'loaded and starting load json data....'
      console.log(message)
    
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
  addVolume = e => {
    this.setState({ volume:  this.state.volume +0.1>1?1:this.state.volume +0.1})
  }
  subtractVolume = e => {
    this.setState({ volume:  this.state.volume-0.1>0?this.state.volume-0.1:0})
  }
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }
  like = () => {
    this.setState({ likeCount: this.state.likeCount +1 })
  }
  unlike = () => {
    this.setState({ unlikeCount: this.state.unlikeCount +1 })
  }
  setPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
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
	this.setState({played: state.played })
    // We only want to update time slider if we are not currently seeking
    //if (!this.state.seeking) {
    //  this.setState(state)
    //}
  }
  onEnded = () => {
    console.log('onEnded')
    this.setState({ playing: this.state.loop })
  }
  renderLoadButton = (url, label) => {
    return (
      <a onClick={() => this.load(url)}>
        {url}
      </a >
    )
  }
  ref = player => {
    this.player = player
  }
  render () {
    const { url, playing, controls,  volume, muted,  played, likeCount,unlikeCount, playbackRate,playLists } = this.state
    const SEPARATOR = ' · '

    return (
      <div className='app'>
        <section className='section'>
          <h1>Reactjs Training Video Player </h1>
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
              //likeCount={likeCount}
             // unlikeCount={unlikeCount}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')}
              onPlay={this.onPlay}             
              onPause={this.onPause}
              onBuffer={() => console.log('onBuffer')}              
              onEnded={this.onEnded}
              onError={e => console.log('onError', e)}
              onProgress={this.onProgress}             
            />
          </div>

          <table><tbody>
            <tr>
              <th>.</th>
              <td>
                
                <button  className="radius1 btn btn-blue btn-lg" onClick={this.playPause} disabled={playing ? true : false}>
                 <span id="play-pause-icon" className="blue glyphicon glyphicon-play"></span></button>              
                <button  className='radius1 btn btn-blue btn-lg'  onClick={this.stop}>
                <em className='blue glyphicon glyphicon-stop'></em></button>

                <button id='volume-inc-button' className='radius1 btn btn-blue btn-lg' onClick={this.addVolume}>
                <em className="blue glyphicon glyphicon-plus"></em></button>
                <button  id='volume-dec-button' className='radius1 btn btn-blue btn-lg' onClick={this.subtractVolume}>
                <em className="blue glyphicon glyphicon-minus"></em></button>

                <button   className='radius1 btn btn-blue btn-lg' onClick={this.toggleMuted}>
                <em id='mute-icon' className="blue glyphicon glyphicon-headphones"></em>
                </button>

                <button  className='radius1 btn btn-blue btn-lg' onClick={this.like}>
                <em className="blue glyphicon  glyphicon-thumbs-up">{likeCount}</em>
                </button>
            <button   className='radius1 btn btn-blue btn-lg' onClick={this.unlike}>
                <em className="blue glyphicon glyphicon-thumbs-down" >{unlikeCount}</em>
               </button>
              </td>
            </tr>            
            <tr>
              <th>progress</th>
              <td><progress max={1} value={played} /></td>
            </tr>          
          </tbody></table>
        </section>
     
        
        <section className='section'>             
          <table><tbody>                                             
            <tr>
              <th>Training</th>
              <td><em className=" radius0 blue glyphicon glyphicon-play"></em>
               Introduction to HTML5'            
              </td>
              </tr>
             <tr>
              <th></th>
              <td><em className=" radius0 blue glyphicon glyphicon-play"></em>
              Introduction to Styling with CSS3     
              </td>
            </tr>
            <tr>
              <th></th>
              <td><em className=" radius0 blue glyphicon glyphicon-play"></em>
              Introduction to Bootstrap 4
              </td>
            </tr>
            <tr>
              <th></th>
              <td><em className=" radius0 blue glyphicon glyphicon-play"></em>
              Learn to create website with HTML5, CSS3 and Bootstrap4
              </td>
            </tr>
            <tr>
              <th></th>
              <td><em className=" radius0 blue glyphicon glyphicon-play"></em>
              Introduction to Javascript
              </td>
            </tr>
            <tr>
              <th></th>
              <td>________________________________________
            
              </td>
            </tr>
            <tr>
              <th>Add new</th>
              <td>
              <input ref={input => { this.titleInput = input }} type='text' placeholder='Enter Title' />
                <input ref={input => { this.urlInput = input }} type='text' placeholder='Enter URL' />               
                <button onClick={() => this.setState({ url: this.urlInput.value ,title:this.titleInput.value})}>
                  Add Video</button>
              </td>

            </tr>
          
            <tr>
              <th>test</th>
              <td>              
                {this.renderLoadButton('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', 'TestA')}               
                </td>              
              <td >
              <div className ='item' >
              <button onClick={() => this.setState()}>Edit</button>
              <button onClick={() => this.setState()}>Delete</button>
              <button onClick={() => this.setState()}>Approve</button> 
              </div>
              </td>
            </tr>
            <tr>
              <th>test</th>   
              <td>                            
                {this.renderLoadButton('http://vjs.zencdn.net/v/oceans.mp4', 'Test1')}               
                </td>      
                <td >
              <div className ='item' >
              <button onClick={() => this.setState()}>Edit</button>
              <button onClick={() => this.setState()}>Delete</button>
              <button onClick={() => this.setState()}>Approve</button> 
              </div>
              </td> 
            </tr>
            <tr>
              <th>test</th>    
              <td>              
                {this.renderLoadButton('https://www.w3cschool.cn/statics/demosource/movie.mp4', 'TestB')}   
                </td>   
                <td >
              <div className ='item' >
              <button onClick={() => this.setState()}>Edit</button>
              <button onClick={() => this.setState()}>Delete</button>
              <button onClick={() => this.setState()}>Approve</button> 
              </div>
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
      </div>
    )
  }
}

export default hot(module)(App)
