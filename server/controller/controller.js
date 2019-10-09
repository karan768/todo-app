const Note = require('../modals/item');

exports.create=(req, res) => {
	console.log(req.body,"req.body")
const newItem = new Note({
    name: req.body.value
});
console.log(newItem)

newItem.save().then(item => res.json(item));
};

exports.findAll = (req, res) => {
    Note.find({},{name:1})
    .then(items => {
        res.send({
        	items
        
        });

    }).catch(err => {
    	res.status(500).send({
    		message:err.message||"some error occured"
    	});
    });
};

exports.delete_it = (req,res) => {
	var id = req.params.id;
    Note.deleteOne({_id: id}, function(err){
		if(err){
			console.log(err);
			return res.status(500).send();
		}
		return res.status(200).send();
		res.send("deleted");
	});
};

exports.update_it = (req,res) => {
		var id = req.params.id;
		console.log(id)
		var data = req.body
		console.log(data,"data")
		Note.findOneAndUpdate({_id: id},data, function(err){
			if(err){
				console.log(err);
				res.status(500).send();
			}
		    return res.status(200).send();
		    res.send("updated");
		})
};