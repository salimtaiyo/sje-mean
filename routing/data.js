const express = require('express');

const Data = require('../modal/data');

const router = express.Router();

router.get('/data', (req,res) => {
    Data.find({}, (request,response) => {
        // console.log(res);
        res.json({ response})
    })
})
router.post("/data", (req,res) => {
    // the new data thats being created
    const data = new Data({
        resource: req.body.resource,
        code : req.body.code
    });

    data.save().then(response => res.json({
        message: "success",
        res: response
    }).catch(
        error => { res.json({ error})}
    ));

});

module.exports= router;
