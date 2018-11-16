const express = require('express');

const Data = require('../modal/data');

const router = express.Router();

// router.get('/data', (req,res) => {
//     Data.find({}, (request,response) => {
//         // console.log(res);
//         res.json({ response})
//     })
// })

// getting localhost://3000/data
router.get('/data', (req,res) => {
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const dataFind = Data.find();

    if(pageSize==0 && currentPage){
        dataFind.skip(0).limit(currentPage);
    } else if(pageSize && currentPage) {
        dataFind.skip(pageSize * currentPage).limit(currentPage)
    }

    dataFind.then(doc => {
        res.json({
            message: "successfully pulled",
            data:doc
        })
    })
})

// posting localhost:3000/data
router.post("/data", (req,res) => {
    // the new data thats being created
    const data = new Data({
        resource: req.body.resourceName,
        code : req.body.resourceCode
    });

    data.save().then(response => res.json({
        message: "success",
        res: response
    }));
    // .catch(
    //     error => { re.json({ error})}
    // )
});


// updating 
router.patch('/data/:id', (req,res) => {
    Data.findOneAndUpdate({_id: req.params.id}, {
        $set:{
            resource: req.body.resource,
            code : req.body.code
        }
    },
    function(err,result){
        if(err){
            res.json(err)
        }
        else{
            res.json({result})
        }
    })
})
module.exports= router;
