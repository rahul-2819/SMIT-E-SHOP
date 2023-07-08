const express = require('express')
const router = express.Router()

router.post('/smithItems',(req,res)=>{
    try{
        res.send([global.smith_items , global.Category])
    }catch(error){
        crossOriginIsolated.log(error.message);
        res.send("server error")
    }
})


module.exports = router; 