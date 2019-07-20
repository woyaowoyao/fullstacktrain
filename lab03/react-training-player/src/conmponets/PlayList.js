import React, { Component } from 'react'

export default class PlayList extends Component {
  state = {  
  }
  
  render () {
    const { url, playing, controls,  volume, muted,  played, likeCount,unlikeCount, playbackRate,playLists } = this.state
    return (
              // <div className ='item' >
              <td  className ='item'>
              <button >Edit</button>
              <button >Delete</button>
              <button >Approve</button>              
              </td>
    )
  }
}

