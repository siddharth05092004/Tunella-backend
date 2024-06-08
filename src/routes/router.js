const express = require('express')
const router = express.Router()
const {post_data,get_data} = require('./../controllers/data.controller.js')

router.get('/:id',async(req,res)=>{
    const resp = await get_data(req.params.id);
    res.send(resp)
})

router.post('/',async (req,res)=>{
    const id_post = await post_data(req.body)
    console.log(id_post._id.toString())
    res.send(id_post)
})


module.exports = router;