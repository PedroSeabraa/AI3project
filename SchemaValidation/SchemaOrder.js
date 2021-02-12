var mongoose = require('mongoose');
var Schema = mongoose.Schema;
autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb+srv://ai3:ai3@clusterai3.f3gj7.mongodb.net/ai3?retryWrites=true&w=majority");

autoIncrement.initialize(connection);
const OrderSchema = new Schema({
  id: { type: Schema.Types.ObjectId, ref: 'id' },
  userId: Number,
  address: String,
  productsId: Number,
  shipDate: Date,
  Description: String,
  status: String
  });
 
 OrderSchema.plugin(autoIncrement.plugin, 'Order');
  var Order = connection.model('Order', OrderSchema);

module.exports = mongoose.model('Order', OrderSchema);
