import React from 'react';
import './App.css';

function CreateUser() {
  return (
    <form id="msform">
   
   
  
    <fieldset>
      <h2 class="fs-title">Criar User</h2>
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="pass" placeholder="Password" />
      <input type="text" name="contacto" placeholder="Contacto" />
      <input type="button" name="register" class="next action-button" value="Criar" />
    </fieldset>
    
  </form>
  );
}

export default CreateUser;
