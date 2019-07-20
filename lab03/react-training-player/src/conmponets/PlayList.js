import React, { Component } from 'react'

export default class PlayList extends Component {
  // state = {  
  // }
  edit = (id,url,title) => {
    const editUrl ='http://localhost:3000/courses/'+id;    
    fetch(editUrl,{
      body: JSON.stringify({title:title,url:url,approved:false}),
      method:'put',
      headers:{
        'Content-Type':'application/json;charset=UTF-8'
      },
      mode:'cors',
      cache:'default'
    })
     .then(res =>res.json())
     .then((data) => {
       console.log("result data:"+JSON.stringify(data))
     })
      const message = 'edit data....'
      console.log(message)        
      alert("Edit sucessfully!But no approved")
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
       console.log("result data:"+JSON.stringify(data)) 
     })
      const message = 'delete json data....'
      console.log(message)        
      alert("Delete sucessfully!. play list will reload after refresh!")
  }
  approve = (id,url,title) => {
    const editUrl3 ='http://localhost:3000/courses/'+id;    
    fetch(editUrl3,{
      body:JSON.stringify({title:title,url:url,approved:true}),
      method:'put',
      headers:{
        'Content-Type':'application/json;charset=UTF-8'
      },
      mode:'cors',
      cache:'default'
    })
     .then(res =>res.json())
     .then((data) => {
      console.log("result data:"+JSON.stringify(data))     
     })
      const message = 'approve json data....'
      console.log(message)        
      alert("Approved sucessfully!!")
  }

  render () {   
    const id = this.props.id;
    const url = this.props.url;
    const title = this.props.title;
    return (
              // <div className ='item' >
              <td  className ='item'>
              <button onClick={() => this.edit(id,url,title)}>Edit</button>
              <button onClick={() => this.delete(id,url,title)}>Delete</button>
              <button onClick={() => this.approve(id,url,title)}>Approve</button>              
              </td>
    )
  }
}

