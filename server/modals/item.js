const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
const ItemSchema = new Schema({
	name:
	{
		type: String
	}
});
var Item = mongoose.model('item_details',ItemSchema);
module.exports= Item;