'use strict';
//meter esta ligacao noutra pagina e chamala com required
const mongoose = require('mongoose');

var User = require('../SchemaValidation/SchemaUser.js');

mongoose.connect('mongodb+srv://ai3:ai3@clusterai3.f3gj7.mongodb.net/ai3?retryWrites=true&w=majority', {useNewUrlParser: true});


/**
 * Create user
 * This can only be done by the logged in user.
 *
 * body User Created user object
 * no response value expected for this operation
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    
    
   const RegisteredUser = User.find({
     email:body.email
   })
   RegisteredUser
   .exec()
    .then(result => {
      if(result.length < 1) {
      User = mongoose.model('User', 'users');
      var NewUser = new User({
    
    username: body.username,
    email: body.email,
    password: body.password,
    phone: body.phone
  });
  NewUser
   .save()
   .then(saved => {
    resolve(200);
   })
   .catch(error => {
     reject(error);
   });
      }
      else{
       reject(409);
       console.log("User already exists")
      }
     

    })
  })
}


/**
 * Creates list of users with given input array
 * 
 *
 * body List List of user object
 * no response value expected for this operation
 **/
exports.createUsersWithArrayInput = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Creates list of users with given input array
 * 
 *
 * body List List of user object
 * no response value expected for this operation
 **/
exports.createUsersWithListInput = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete user
 * This can only be done by the logged in user.
 *
 * username String The name that needs to be deleted
 * returns List
 **/
exports.deleteUser = function(username) {
  return new Promise(function(resolve, reject) {
   User = mongoose.model('User', 'users');
   User.deleteOne({ username:username }).then(function(){ 
      console.log("Data deleted"); // Success 
      resolve();
  }).catch(function(error){ 
      console.log(error); // Failure 
  }); 
  });
}


/**
 * Get user by user name
 * 
 *
 * username String The name that needs to be fetched. Use user1 for testing. 
 * returns User
 **/
exports.getUserByName = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Name" : "Name",
  "email" : "email",
  "password" : "password",
  "phone" : "phone",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs user into the system
 * 
 *
 * username String The user name for login
 * password String The password for login in clear text
 * returns String
 **/
exports.loginUser = function(username, password) {
  return new Promise(function(resolve) {
    User = mongoose.model('User', 'users');
       
      
    User.findOne({username:username, password:password}).then(function(error, username){
      if(!username){
        return resolve.status(404).send();
      }
      else if(err) { 
        console.log(err);
        return resolve.status(500).send();
      }
      else{resolve();}

    })
      

  })
      }

/**
 * Logs out current logged in user session
 * 
 *
 * no response value expected for this operation
 **/
exports.logoutUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updated user
 * This can only be done by the logged in user.
 *
 * username String name that need to be updated
 * body User Updated user object
 * returns User
 **/
exports.updateUser = function(username,body) {
  return new Promise(function(resolve, reject) {

    User.findOneAndUpdate({email:body.email}, { Name:body.Name, password:body.password, phone:body.phone }).then(function(){ 
      console.log("Data updated"); // Success 
      resolve();
  }).catch(function(error){ 
      console.log(error); // Failure 
  }); 
   
  resolve();

  });
}

