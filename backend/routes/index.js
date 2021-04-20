const express = require('express');
const router = express.Router();

const Url = require('../models/Url');
//route GET /:code
router.get('/:code',async(req,res)=>{

    console.log("get",req.param)

    try{
        const url = await Url.findOne({urlCode:req.params.code});

        if(url){
            return res.redirect(url.longUrl);
        }else{
            return res.status(404).json('No url found');
        }
    }catch (err) {
        console.error(err);
        res.status(404).json('Sever error');
    }
});

module.exports = router;
