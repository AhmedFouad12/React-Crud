import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    let {pName , price , count , category , id , onSale } = this.props.allProducts
    return (
      <>
        <div className=' col-md-4 border rounded-3 position-relative bg-light p-3'>
          <p className=' text-info'><span className=' text-muted'>Name :</span> {pName}</p>
          <p className=' text-info'><span className=' text-muted'>price :</span> :{price}</p>
          <p className=' text-info'><span className=' text-muted'>count :</span> :{count}</p>
          <p className=' text-info'><span className=' text-muted'>category :</span> :{category}</p>
          {onSale ?<div className=' position-absolute top-0 end-0 bg-danger rounded-3 p-2'>Sale</div> :""}
          <button className=' btn btn-outline-danger w-100' onClick={()=>this.props.delete(id)}>Delete</button>
          <button className=' btn btn-outline-info w-100 my-2 text-muted' onClick={()=>this.props.update(this.props.productIndex)}>Update</button>
        </div>
      </>
    )
    
  }
}