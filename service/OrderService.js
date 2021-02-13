'use strict';

//meter esta ligacao noutra pagina e chamala com required
const mongoose = require('mongoose');
const { update } = require('../SchemaValidation/SchemaOrder.js');
var Order = require('../SchemaValidation/SchemaOrder.js');
mongoose.connect('mongodb+srv://ai3:ai3@clusterai3.f3gj7.mongodb.net/ai3?retryWrites=true&w=majority', {useNewUrlParser: true});
const express = require('express')
const router = express.Router()
var jwt = require('jsonwebtoken');


var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var config = require('../config');



/**
 * Send a new order
 * 
 *
 * body Order Order object that needs to be added to the app
 * no response value expected for this operation
 **/
exports.addOrder = function(body, res) {
  return new Promise(function(resolve, reject) {
  
    console.log("Trying to add Order");
    var token = jwt.sign({ id: body._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    Order = mongoose.model('Order', 'Orders');
    var NewOrder = new Order({
      userId: body.userId,
      address: body.address,
      productsId: body.productsId,
      shipDate: body.shipDate,
      Description: body.Description,
      status: body.status
    });
    NewOrder
     .save()
     .then(saved => { 
       resolve(200).send({ auth: true, token: token })
      
     })//acrescentar erros de diferentes situacoes
     .catch(error => {
       reject(400);
     })
   
})
}

router.get('/me', function(req, res) {
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
    res.status(200).send(decoded);
  });
});
/**
 * Deletes a order
 * 
 *
 * orderId Long Order id to delete
 * api_key String  (optional)
 * returns List
 **/
exports.deleteOrder = function(_id,api_key) {
  return new Promise(function(resolve, reject) {
    Order = mongoose.model('Order', 'Orders');
    Order.deleteOne({ _id:_id  }).then(function(){ 
      console.log("Data deleted"); // Success 
      resolve();
  }).catch(function(error){ 
      console.log(error); // Failure 
  }); 
})
}

/**
 * Finds Orders by status
 * Multiple status values can be provided with comma separated strings
 *
 * status List Status values that need to be considered for filter
 * returns List
 **/
exports.findOrdersByStatus = function(status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "address" : "address",
  "quantity" : 1,
  "id" : 0,
  "shipDate" : "2000-01-23T04:56:07.000+00:00",
  "complete" : false,
  "Description" : "productDescription",
  "status" : "placed"
}, {
  "address" : "address",
  "quantity" : 1,
  "id" : 0,
  "shipDate" : "2000-01-23T04:56:07.000+00:00",
  "complete" : false,
  "Description" : "productDescription",
  "status" : "placed"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds orders by tags
 * Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
 *
 * tags List Tags to filter by
 * returns List
 **/
exports.findOrdersByTags = function(tags) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "address" : "address",
  "quantity" : 1,
  "id" : 0,
  "shipDate" : "2000-01-23T04:56:07.000+00:00",
  "complete" : false,
  "Description" : "productDescription",
  "status" : "placed"
}, {
  "address" : "address",
  "quantity" : 1,
  "id" : 0,
  "shipDate" : "2000-01-23T04:56:07.000+00:00",
  "complete" : false,
  "Description" : "productDescription",
  "status" : "placed"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find order by ID
 * Returns a single order
 *
 * orderId Long ID of order to return
 * returns Order
 **/
exports.getOrderById = function(orderId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address" : "address",
  "quantity" : 1,
  "id" : 0,
  "shipDate" : "2000-01-23T04:56:07.000+00:00",
  "complete" : false,
  "Description" : "productDescription",
  "status" : "placed"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing order
 * 
 *
 * body Order Order object that needs to be added to the app
 * returns Order
 **/
exports.updateOrder = function(body) {
  
  return new Promise(function(resolve, reject) {
    console.log("Trying to update");
    Order = mongoose.model('Order', 'Orders');
   
  
    Order.findOneAndUpdate({_id:body._id}, { status:body.status }).then(function(){ 
      console.log("Data updated"); // Success 
      resolve();
  }).catch(function(error){ 
      console.log(error); // Failure 
  }); 
   
  resolve();
 






  })
}


/**
 * Updates a order in the store with form data
 * 
 *
 * orderId Long ID of order that needs to be updated
 * name String Update name of the order (optional)
 * status String Updated status of the order (optional)
 * no response value expected for this operation
 **/
exports.updateOrderWithForm = function(orderId,name,status) {
  return new Promise(function(resolve, reject) {
    
    console.log("Trying to update");
    Order = mongoose.model('Order', 'Orders');
   
    const filter = { orderId };
    const update = { status, name};
    
    let doc = Order.findOneAndUpdate(filter, update, {
      new: true
    
    });
  resolve();
  });
}

