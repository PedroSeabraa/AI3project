import React from 'react';
import './App.css';

function LoginUser() {
  return (
    <form id="msform">
   
   
  
    <fieldset>
      <h2 class="fs-title">Login</h2>
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="pass" placeholder="Password" />
      <input type="button" name="register" class="next action-button" value="Login" />
    </fieldset>
    
  </form>
  );
}

export default LoginUser;
