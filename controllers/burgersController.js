var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res) {

    burger.all(function(data){
        console.log(data)
        
        var burgerObject = {
            burgers: data
        }
        res.render("index", burgerObject);
    })

});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("made it this far")

    burger.update(condition, function(result){
        console.log(result);
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

router.post("/api/burgers", function(req, res){
    console.log(req.body)
    burger.create(req.body, function(result){
        console.log(result)
        res.json({ id: result.insertId });
    })
})

module.exports = router;