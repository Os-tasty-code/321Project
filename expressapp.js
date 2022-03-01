const express = require('express');

const app = express()

app.get('/', function (req, res) {

    console.log('Hello World')
    res.send('HEY WORLD WHATUP')

})

app.get('/page2', function (req, res) {

    const id = req.query.id
    res.send('THIS IS PAGE 2, son! ' + id)

})
app.get('/page2/:id', function (req, res) {

    const id = req.params.id
    res.send('Dynamic URLS, kid!' + id)

})

app.listen(9000, function (req, res) {

    console.log('runnin runnin...')
})