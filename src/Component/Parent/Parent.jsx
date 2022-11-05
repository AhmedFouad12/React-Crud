import React, { Component } from 'react'
import Child from '../Child/Child'
export default class Parent extends Component {
    state = {
        products : [
          {pName:'Toshipa' , price:'5000', onSale:false , count:'6' , category : "Air condetion" , id: "1"},
          {pName:'Nokila' , price:'9000 ', onSale:true , count:'3' , category : "Mobile" , id:"2"},
          {pName:'Samsung' , price:'2000', onSale:false , count:'1' , category : "TV" , id:"3"},
          {pName:'LG' , price:'7000', onSale:true , count:'9' , category : "TV" , id:"4"},
          {pName:'Samsung' , price:'3232', onSale:true , count:'7' , category : "Mobile" , id:"5"},
          {pName:'Oppo' , price:'2432', onSale:false , count:'4' , category : "Mobile" , id:"6"},
          {pName:'Apple' , price:'4645', onSale:true , count:'9' , category : "Mobile" , id:"7"},
          {pName:'Apple' , price:'6466', onSale:false , count:'10' , category : "Mobile" , id:"8"},
          {pName:'Apple' , price:'6456', onSale:true , count:'9' , category : "Mobile" , id:"9"},
    ]
    }

  deleteProduct = (x)=>
  {
    let myProducts = [...this.state.products]
    myProducts = myProducts.filter((product)=> product.id !== x)
    // myProducts.splice(x,1)
    this.setState({products:myProducts})
  }

  updateProducts = (x)=>
  {
    let myProducts = [...this.state.products]
    myProducts[x].count++
    this.setState({products:myProducts})
  }

    render() {
    return (
      <>
      <div className=' container'>
        <h5 className=' p-2 text-muted'>Products</h5>
        <div className=' row p-1'>
          {this.state.products.map((product , idnex)=> <Child allProducts={product} delete={this.deleteProduct} productIndex={idnex} update={this.updateProducts}/>)}
        </div>
      </div>
      </>
    )
     
    
  }
}

