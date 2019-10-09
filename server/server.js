const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const db = require('./config/database.config').url;
mongoose.connect(db)
.then(()=> console.log("connected"))
.catch(err=> console.log(err));

app.use(express.json());
require('./routes/api/items.js')(app);

app.listen(5000,()=>{
	console.log('server is connected');
});