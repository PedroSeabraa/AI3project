'use strict';
const { Schema } = require('js-yaml');
//meter esta ligacao noutra pagina e chamala com required
const mongoose = require('mongoose');

var Product = require('../SchemaValidation/SchemaProduct.js');

mongoose.connect('mongodb+srv://ai3:ai3@clusterai3.f3gj7.mongodb.net/ai3?retryWrites=true&w=majority', {useNewUrlParser: true});

/**
 * New product
 * 
 *
 * body Product Product object that needs to be added to the app
 * returns List
 **/
exports.addProduct = function(body) {
  return new Promise(function(resolve, reject) {
    console.log("teste");

    
    Product = mongoose.model('Product', 'product');

    var NewProduct = new Product({
      "productId": body.productId,
      "productName": body.productName,
      "quantity": body.quantity,
      "tags": body.tags
    });
    NewProduct
     .save()
     .then(saved => {
      resolve(200);
     })
     .catch(error => {
       reject(400);
     });
})
}


/**
 * Deletes a product
 * 
 *
 * productId Long Product id to delete
 * api_key String  (optional)
 * returns Product
 **/
exports.deleteProduct = function(productId,api_key) {
  return new Promise(function(resolve, reject) {
    Product = mongoose.model('Product', 'product');
    Product.deleteOne({ productId:productId }).then(function(){ 
      console.log("Data deleted"); // Success 
      resolve();
  }).catch(function(error){ 
      console.log(error); // Failure 
  }); 
  });
}


/**
 * Finds productS by tags
 * Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
 *
 * tags List Tags to filter by
 * returns List
 **/
exports.findProductSByTags = function(tags) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "quantity" : 1,
  "id" : 0,
  "productName" : "productDescription",
  "tags" : [ {
    "name" : "name",
    "id" : 5
  }, {
    "name" : "name",
    "id" : 5
  } ]
}, {
  "quantity" : 1,
  "id" : 0,
  "productName" : "productDescription",
  "tags" : [ {
    "name" : "name",
    "id" : 5
  }, {
    "name" : "name",
    "id" : 5
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find product by ID
 * Returns a single product
 *
 * productId Long ID of product to return
 * returns Product
 **/
exports.getProductById = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "quantity" : 1,
  "id" : 0,
  "productName" : "productDescription",
  "tags" : [ {
    "name" : "name",
    "id" : 5
  }, {
    "name" : "name",
    "id" : 5
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing product
 * 
 *
 * body Product Product object that needs to be added to the app
 * returns Product
 **/
exports.updateProduct = function(body) {
  return new Promise(function(resolve, reject) {
   
   Product.findOneAndUpdate({productId:body.productId}, { quantity:body.quantity, productName:body.productName }).then(function(){ 
      console.log("Data updated"); // Success 
      resolve();
  }).catch(function(error){ 
      console.log(error); // Failure 
  }); 
   
  resolve();
 
  });
}


/**
 * Updates a product in the store with form data
 * 
 *
 * productId Long ID of product that needs to be updated
 * name String Update name of the product (optional)
 * status String Updated status of the product (optional)
 * no response value expected for this operation
 **/
exports.updateProductWithForm = function(productId,name,status) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

