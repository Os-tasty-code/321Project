const express = require('express')
const {MongoClient} = require('mongodb')
const app = express()

const port = 9000
app.use(express.static('public'))

// Information: Need cors installed. npm install cors.
// Also needs websocket installed. npm install ws


// Resolves the issues caused by app and express running on two different ports.
var cors = require('cors')
app.use(cors())

// Allows handling of the axios data for .body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const url = "mongodb+srv://Philip:malfwKrp0QnjPG8z@cluster0.wdjd3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const databaseName = "ChoreApp"
const collectionName = "ChoreData"

let data = []

// Websocket
const webSocket = require('ws')
const wss = new webSocket.Server({ noServer: true })

var dbo
var collection
// Need to call db.close(); when the user exits the page?
wss.on('connection', function connection(ws) {
	// Set up a listener for when the collection changes.
	changeStream = collection.watch();
	changeStream.on("change", next => {
		// Process any change event
		loadData(ws)
	})
})

function loadData(ws) {
	collection.find({}).toArray( 
	function(err, result) {
		if (err) throw err;
		console.log("Data loaded from MongoDB.")
		data = result;
		if (ws) {
			ws.send(JSON.stringify({data}))
		}
	});
}

async function main(){
	// Original listener was here
	MongoClient.connect(url, function(err, db) {
		console.log("connected")
		if (err) throw err;
		dbo = db.db(databaseName);
		collection = dbo.collection(collectionName)

		loadData()
	})
}
main().catch(console.error);

app.post('/create', function(req, res) {
	// This formatting needs to be better defined later.
	const newChore = {
		id: req.body.id,
		name: req.body.name,
		assignedTo: req.body.assignedTo,
		desc: req.body.desc
	}

    dbo.collection(collectionName).insertOne(newChore, function(err, res) {
		if (err) throw err;
		console.log("Chore successfully inserted.");
		console.log(res)

		data.push(newChore)
	});
})

app.post('/delete', function(req, res) {
	// This formatting needs to be better defined later.
	var toDelete = req.body.id
	console.log(toDelete)

    dbo.collection(collectionName).deleteOne({id: toDelete}, function(err, res) {
		if (err) throw err;
		console.log("Chore successfully deleted.");
		console.log(res)

		const del = data.filter(data => (toDelete !== data.id))
		data = del
	})
})

app.get('/api', function (req, res) {
	res.send(data)
})

server = app.listen(port, function (req, res) {
	console.log('Running on port ' + port + '.');
	console.log('http://localhost:' + port + '/');
})
server.on('upgrade', (request, socket, head) => {
	wss.handleUpgrade(request, socket, head, socket => {
		wss.emit('connection', socket, request);
	});
});
