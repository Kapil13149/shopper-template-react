var mongoClient = require('mongodb').MongoClient;
// import { MongoClient } from 'mongodb';
// var mongoClient = MongoClient;
var express = require('express');
var cors = require('cors');

var url = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// GET route for retrieving all products
app.get("/products", (req, res) => {
    mongoClient.connect(url)
        .then((clientObject) => {
            var db = clientObject.db("shopper");
            db.collection("products").find({}).toArray()
                .then((documents) => {
                    res.send(documents);
                })
        })
});

// GET route for retrieving details of a specific product
app.get("/details/:id", (req, res) => {
    var id = parseInt(req.params.id);
    mongoClient.connect(url)
        .then((clientObject) => {
            var db = clientObject.db("shopper");
            db.collection("products").find({ ProductID: id }).toArray()
                .then((documents) => {
                    res.send(documents);
                })
        })
});

// POST route for adding products
app.post("/addproducts", (req, res) => {
    mongoClient.connect(url)
        .then((clientObject) => {
            var db = clientObject.db("shopper");
            var product = {
                "ProductID": parseInt(req.body.ProductID),
                "Name": req.body.Name,
                "Price": parseFloat(req.body.Price),
                "Stock": (req.body.Stock === true ? true : false),
            };
            db.collection("products").insertOne(product)
            .then((result) => {
                console.log("Record Inserted Successfully");
                console.log(product.Stock);
                    res.redirect("/products");
                })
        })
});

// PUT route for updating products
app.put("/updateproduct/:id", (req, res) => {
    var id = parseInt(req.body.ProductID);
    mongoClient.connect(url)
        .then((clientObject) => {
            var db = clientObject.db("shopper");
            var findQuery = { ProductID: id };
            var updateQuery = {
                $set: {
                    Name: req.body.Name,
                    Price: parseFloat(req.body.Price),
                    Stock: (req.body.Stock === "false" ? true : false)
                }
            };
            db.collection("products").updateOne(findQuery, updateQuery)
                .then((result) => {
                    console.log("Record Updated Successfully");
                    res.redirect("/products");
                })
        })
});

// DELETE route for deleting products
app.delete("/deleteproduct/:id", (req, res) => {
    var id = parseInt(req.params.id);
    mongoClient.connect(url)
        .then((clientObject) => {
            var db = clientObject.db("shopper");
            db.collection("products").deleteOne({ ProductID: id })
                .then((result) => {
                    console.log("Record Deleted Successfully");
                    res.redirect("/products");
                })
        })
});

app.get("/users", (req, res) => {
    mongoClient.connect(url).then((clientObject) => {
        var db = clientObject.db("shopper");
        db.collection("users").find({}).toArray().then((documents) => {
            res.send(documents);
        })
    })
});

app.post("/register", (req, res) => {
    console.log(req.body);
    var user = {
        "UserID": req.body.UserID,
        "UserName": req.body.UserName,
        "Password": req.body.Password,
        "Email": req.body.Email,
        "Age": parseInt(req.body.Age),
        "Mobile": req.body.Mobile
    }
    mongoClient.connect(url).then((clientObject) => {
        var db = clientObject.db("shopper");
        db.collection("users").insertOne(user).then((result) => {
            console.log("Record inserted successfully");
            res.redirect("/users");
        })
    })
})

app.listen(8080);
console.log('Server Started : http://127.0.0.1:8080');
