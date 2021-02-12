import React from 'react';
import './App.css';

function CreateProduct() {
  return (
    <form id="msform">
   
   
  
    <fieldset>
      <h2 class="fs-title">Inserir produto</h2>
      <input type="text" name="nomeproduto" placeholder="Nome do produto" />
      <input type="text" name="quantity" placeholder="Quantidade" />
      <input type="button" name="register" class="next action-button" value="Confirmar" />
    </fieldset>
    
  </form>
  );
}

export default CreateProduct;
