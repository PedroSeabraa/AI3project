import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class CreateOrder extends Component{

  constructor(){
    super()
    this.state={
      Description:'',
      address:'',
      idproduct:''
    }
    this.changeDescription = this.changeDescription.bind(this)
    this.changeAddress = this.changeAddress.bind(this)
    this.changeproductsId = this.changeproductsId.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeDescription(event){
    this.setState({
      Description:event.target.value
    })
  }
  changeAddress(event){
    this.setState({
      address:event.target.value
    })
  }
  changeproductsId(event){
    this.setState({
      productsId:event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()

    const created = {
      Description: this.state.Description,
      address: this.state.address,
      productsId: this.state.productsId
    }
    axios.post('http://localhost:8080/v2/order/', created)
     .then(response => console.log(response.data))

     //window.location = '/login'
     this.setState({
       Description:'',
       address:'',
       productsId:''
     })
  }
  render(){
  return (
    <form id="msform" onSubmit={this.onSubmit}>
  
    <fieldset>
      <h2 class="fs-title">Encomendar</h2>
      <input type="text" name="Description" placeholder="Descricao" onChange={this.changeDescription} value={this.state.Description}/>
      <input type="text" name="address" placeholder="Morada" onChange={this.changeAddress} value={this.state.address}/>
      <input type="number" name="productsId" placeholder="Id do produto" onChange={this.changeproductsId} value={this.state.productsId}/>
      <input type="submit" name="register" class="next action-button" value="Confirmar" />
    </fieldset>
    
  </form>
  );}
}

export default CreateOrder;
