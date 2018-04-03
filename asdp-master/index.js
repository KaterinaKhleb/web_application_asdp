var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/workflow');

const Customer = mongoose.model('orders', { first_name: String, last_name: String,
     phone: String, address: String, zip_code: String, city: String, product: String, 
     type: String, amount: Number, additional_info: String  });


app.use(express.static(__dirname + "/dist"));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Access-Control-Allow-Origin');

    // Pass to next layer of middleware
    next();
});


app.post("/customers", (req, res) => {
    console.log(req.body);
    if (req.body.first_name &&
        req.body.last_name &&
        req.body.address &&
        req.body.zip_code &&
        req.body.city &&
        req.body.product &&
        req.body.type &&
        req.body.amount &&
        req.body.additional_info) {
            postWorkflow(req.body , (res, err) => {
                if (err) {
                    res.status(500);
                    res.send( err);
                } else {
                    res.status(201);
                    res.send("OK");
                }
            })
        }
     else {
        res.status(500);
        res.send( "No all fields provided");
     }
});

app.get("/customers", (req, res) => {
    getWorkflows((err, result) => {
        console.log("result: " + result);
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
        res.send(result);
    })
});


app.get("/", (req, res) => res.sendFile('index.html', {root: __dirname + "/dist/"}))


app.listen(3000);

function getWorkflows() {
    Customer.find().then( (err, result) => {
        if (err) {
            console.error(err);
        } else {
            console.log(result);
        }
    });
}

function getWorkflows(callback) {
    Customer.find({}, callback);
}

    function postWorkflow(first_name, last_name, phone, address, zip_code, city,
         product, type, amount, additional_info ) {
        const newCustomer = new Customer({first_name, last_name, phone,
             address, zip_code, city, product, type, amount, additional_info}  )
            .save().then((savedCustomers) => {
                console.log(savedCustomers);
        getWorkflows();
    })
}
    function postWorkflow(customer, callback ) {
        const newCustomer = new Customer(customer)
            .save().then(callback)
}

