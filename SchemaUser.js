var mongoose = require('mongoose');
var Schema = mongoose.Schema;
autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb+srv://ai3:ai3@clusterai3.f3gj7.mongodb.net/ai3?retryWrites=true&w=majority");

autoIncrement.initialize(connection);

const UserSchema = new Schema({
    id: { type: Schema.Types.ObjectId, ref: 'id' },
    username: String,
    email: String,
    password: String,
    phone: Number
  });
  UserSchema.plugin(autoIncrement.plugin, 'User');
  var User = connection.model('User', UserSchema);

module.exports = mongoose.model('User', UserSchema);
