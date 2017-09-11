var express = require('express')
var router = express.Router()

//var bp = require('body-parser')
//router.use(bp.json())
var sent = false;

router.use('/:name/:id([0-9]{3})', function(req, res, next){
    console.log("requets received at time: " + Date.now())
    next()
})

router.get('/:name/:id([0-9]{3})', function(req, res, next){
     if(req.params.id == '000') next('route')
     else next()
 }, function(req, res, next){
     res.send("things/ id: " + req.params.id + " and name: " + req.params.name)
     sent = true;
    next()
})

router.get('/:name/:id([0-9]{3})', function (req, res, next) {
    if(!sent){
        res.send('Id cannot be 0')
        sent = true
    }
    else console.log('already sent')
    res.end()
})

router.post('/', function(req, res){
    res.send("POST request on things. ")
})

module.exports = router