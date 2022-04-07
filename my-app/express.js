import './database.js'
const express = require('express');
const app = express()
const path = require('path')

app.use(express.static('public'))

app.get('/', function (req, res) {
    var options = {
        root: path.join(__dirname)
    }
    res.sendFile('public/index.html', options)
})
// app.get('/game', function (req, res) {
//     var options = {
//         root: path.join(__dirname)
//     }
//     res.sendFile('public/tic.html', options)
// })

app.listen(9000, function (req, res) {
    console.log('Running on port 9000.');
    console.log('http://localhost:9000/');
    console.log(database.cursor);
})