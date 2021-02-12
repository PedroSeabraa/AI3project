import React from 'react';
import './App.css';

function EditOrder() {
  return (
    <form id="msform">
   
   
  
    <fieldset>
      <h2 class="fs-title">Editar estado da encomenda</h2>
      <input type="text" name="id" placeholder="Id da encomenda" />
      <input type="text" name="status" placeholder="Estado" />
      <input type="button" name="register" class="next action-button" value="Alterar" />
    </fieldset>
    
  </form>
  );
}

export default EditOrder;
