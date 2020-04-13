const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const product = require('./routes/product.route');

//Setup mongoose Connection
mongoose.connect("mongodb://localhost/productsDB",
{ useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind('MongoDb Connection Error'))

//For body parser to handle req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);


app.listen(3000, ()=>{
    console.log('Server Started at port 3000..');
})