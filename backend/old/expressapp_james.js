const express = require('express');
const app = express()
const path = require('path')

app.use(express.static('public'))

// app.get('/', function (req, res) {
//     var options = {
//         root: path.join(__dirname)
//     }
//     res.sendFile('public/index.html', options)
// })
app.get('/api', function (req, res) {
    console.log("hitting api");

    var data = [
        {
            "id": 1,
            "name": "Clean dishes Backend",
            "assignedTo": "James",
            "desc": "Clean all dishes in the sink."
        },
        {
            "id": 2,
            "name": "Do laundry",
            "assignedTo": "O",
            "desc": "Do everyone's laundry, wash and dry."
        },
        {
            "id": 3,
            "name": "Vaccum",
            "assignedTo": "Zach",
            "desc": "Vaccum the basement and first floor."
        },
    ]
    res.header("Access-Control-Allow-Origin", "*");
    res.send(data)
})

app.listen(9000, function (req, res) {
    console.log('Running on port 9000.');
    console.log('http://localhost:9000/');
})
