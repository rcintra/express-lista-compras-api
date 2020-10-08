var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemSchema = new Schema(
  {
    nome: {type: String, required: true, maxlength: 100},
    email: {type: String, required: true, maxlength: 100},
    comprado: {type: Boolean}
  }
);

// Virtual for iten's
ItemSchema
.virtual('itens')
.get(function () {
  return '/item/email/' + this._email;
});

//Export model
module.exports = mongoose.model('Item', ItemSchema);