'use strict';

var utils = require('../utils/writer.js');
var Product = require('../service/ProductService');

module.exports.addProduct = function addProduct (req, res, next) {
  var body = req.swagger.params['body'].value;
  Product.addProduct(body)
    .then(function (response) {
      utils.writeJson(res, "Inserido com sucesso",response);
    })
    .catch(function (response) {
      console.log(response);
    utils.writeJson(res, "Nao foi possível inserir o registo",response);
    });
};

module.exports.deleteProduct = function deleteProduct (req, res, next) {
  var productId = req.swagger.params['productId'].value;
  var api_key = req.swagger.params['api_key'].value;
  Product.deleteProduct(productId,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findProductSByTags = function findProductSByTags (req, res, next) {
  var tags = req.swagger.params['tags'].value;
  Product.findProductSByTags(tags)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductById = function getProductById (req, res, next) {
  var productId = req.swagger.params['productId'].value;
  Product.getProductById(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProduct = function updateProduct (req, res, next) {
  var body = req.swagger.params['body'].value;
  Product.updateProduct(body)
    .then(function (response) {
      utils.writeJson(res, "Alterado com sucesso",response);
    })
    .catch(function (response) {
      console.log(response);
      utils.writeJson(res, "Nao foi possível alterar",response);
    });
};

module.exports.updateProductWithForm = function updateProductWithForm (req, res, next) {
  var productId = req.swagger.params['productId'].value;
  var name = req.swagger.params['name'].value;
  var status = req.swagger.params['status'].value;
  Product.updateProductWithForm(productId,name,status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
