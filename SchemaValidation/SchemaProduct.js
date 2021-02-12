var mongoose = require('mongoose');
var Schema = mongoose.Schema;
autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb+srv://ai3:ai3@clusterai3.f3gj7.mongodb.net/ai3?retryWrites=true&w=majority");

autoIncrement.initialize(connection);
const ProductSchema = new Schema({
    id: { type: Schema.Types.ObjectId, ref: 'id' },
    productName: String,
    tags: Object,
    quantity: Number
  });
 
  ProductSchema.plugin(autoIncrement.plugin, 'Product');
  var Product = connection.model('Product', ProductSchema);

module.exports = mongoose.model('Product', ProductSchema);
