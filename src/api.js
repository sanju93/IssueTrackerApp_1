const express=require('express');
const serverless=require('serverless-http');
const app=express();

const router=express.Router();

router.get('/' , (req,res)=>{
    res.json({
        message:"runnign succsssfule fon the backend"
    })
})
app.use('/.netlify/functions/api' , router);
module.exports=serverless(app);