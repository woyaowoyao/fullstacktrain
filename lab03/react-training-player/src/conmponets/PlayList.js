import React, { Component } from 'react'

export default class PlayList extends Component {
  // state = {  
  // }
  edit = (id) => {
    const editUrl ='http://localhost:3000/courses/'+id;    
    fetch(editUrl,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json;charset=UTF-8'
      },
      mode:'cors',
      cache:'default'
    })
     .then(res =>res.json())
     .then((data) => {
       console.log("fetch data:"+data)     
     })
      const message = 'edit data....'
      console.log(message)        
  }
  delete = (id) => {
    const editUrl2 ='http://localhost:3000/courses/'+id;    
    fetch(editUrl2,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json;charset=UTF-8'
      },
      mode:'cors',
      cache:'default'
    })
     .then(res =>res.json())
     .then((data) => {
       console.log("fetch data:"+data)     
     })
      const message = 'delete json data....'
      console.log(message)        
  }
  approve = (id) => {
    const editUrl3 ='http://localhost:3000/courses/'+id;    
    fetch(editUrl3,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json;charset=UTF-8'
      },
      mode:'cors',
      cache:'default'
    })
     .then(res =>res.json())
     .then((data) => {
       console.log("fetch data:"+data)     
     })
      const message = 'approve json data....'
      console.log(message)        
  }

  render () {
   // const { url, playing, controls,  volume, muted,  played, likeCount,unlikeCount, playbackRate,playLists } = this.state
    const id = this.props.id;
    return (
              // <div className ='item' >
              <td  className ='item'>
              <button onClick={() => this.edit(id)}>Edit</button>
              <button onClick={() => this.delete(id)}>Delete</button>
              <button onClick={() => this.approve(id)}>Approve</button>              
              </td>
    )
  }
}

