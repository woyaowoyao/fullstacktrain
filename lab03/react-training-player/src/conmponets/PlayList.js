import React, { Component } from 'react'

import './App.css'

class PlayList extends Component {
  state = {
  
  }
  
  render () {
    const { url, playing, controls,  volume, muted,  played, likeCount,unlikeCount, playbackRate,playLists } = this.state
    return (
       
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
         
     
    )
  }
}

export default hot(module)(App)
