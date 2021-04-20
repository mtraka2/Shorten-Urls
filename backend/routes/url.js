const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');

const Url = require('../models/Url')


//@route POST request /api/url/shorten
//@desc Creat short URL
router.post('/shorten',async (req,res)=>{
    console.log("here")
    const {longUrl} = req.body;
    console.log("longUrl",req)
    const baseUrl = config.get('baseUrl');

    if(!validUrl.isUri(baseUrl)){
         return res.status(401).json('Invalid base url')
    }

    //Create url code
    const urlCode = shortid.generate();

    //Check long url
    if(validUrl.isUri(longUrl)){
        try{
            let url = await Url.findOne({longUrl});

            if(url){
                console.log("here")
                await res.json(url);
            }else{
                const shortUrl = baseUrl + '/' + urlCode;

                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date:new Date()
                });

                await url.save();
                await res.json(url);
            }
        }catch(err){
            console.error(err);
            res.status(500).json('Server error');
        }
    }else{
        res.status(401).json('Invalid long url');
    }
});

module.exports = router;
