var express = require('express')
var app = express()

var things = require('./things.js')

app.set('view engine', 'jade');
app.set('views', './views')
app.use(express.static('public/images'))
app.use('/lorem_ipsum', express.static('public'))
app.use('/things', things)

var bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
  extended: true
}))

app.use('/:name/:id([0-9]{5})', function(req, res, next){
    console.log("request received at time " + Date.now())
    console.log("id: " + req.params.id + " and name: " + req.params.name)
    next()
})

app.get('/:name/:id([0-9]{5})', function(req, res){
    res.send("id: " + req.params.id + " and name: " + req.params.name)
    res.end(req.params.id)
})

app.get('/firstView', function(req, res){
    res.render('firstView')
})

app.get('/dynamicView', function(req, res){
    res.render('dynamic', {
        name: "Devanshu",
        id: "6004"
    })
})

app.post('/myaction', function(req, res){
    console.log("message received: " + req.body.email + " " + req.body.name)
    res.send("Your request has been received " + req.body.name)
})

app.listen(4000)