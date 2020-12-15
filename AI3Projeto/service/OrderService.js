'use strict';


/**
 * Send a new order
 * 
 *
 * body Order Order object that needs to be added to the app
 * no response value expected for this operation
 **/
exports.addOrder = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a order
 * 
 *
 * orderId Long Order id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteOrder = function(orderId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
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
  "userId" : 6,
  "productDescription" : "productDescription",
  "tags" : [ {
    "name" : "name",
    "id" : 5
  }, {
    "name" : "name",
    "id" : 5
  } ],
  "status" : "placed"
}, {
  "address" : "address",
  "quantity" : 1,
  "id" : 0,
  "shipDate" : "2000-01-23T04:56:07.000+00:00",
  "complete" : false,
  "userId" : 6,
  "productDescription" : "productDescription",
  "tags" : [ {
    "name" : "name",
    "id" : 5
  }, {
    "name" : "name",
    "id" : 5
  } ],
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
  "userId" : 6,
  "productDescription" : "productDescription",
  "tags" : [ {
    "name" : "name",
    "id" : 5
  }, {
    "name" : "name",
    "id" : 5
  } ],
  "status" : "placed"
}, {
  "address" : "address",
  "quantity" : 1,
  "id" : 0,
  "shipDate" : "2000-01-23T04:56:07.000+00:00",
  "complete" : false,
  "userId" : 6,
  "productDescription" : "productDescription",
  "tags" : [ {
    "name" : "name",
    "id" : 5
  }, {
    "name" : "name",
    "id" : 5
  } ],
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
  "userId" : 6,
  "productDescription" : "productDescription",
  "tags" : [ {
    "name" : "name",
    "id" : 5
  }, {
    "name" : "name",
    "id" : 5
  } ],
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
 * no response value expected for this operation
 **/
exports.updateOrder = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
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
    resolve();
  });
}

