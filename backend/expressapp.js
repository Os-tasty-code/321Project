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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const url = "mongodb+srv://Philip:malfwKrp0QnjPG8z@cluster0.wdjd3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const databaseName = "ChoreApp"
const collectionName = "ChoreData"

let data = [];

// Websocket
const webSocket = require('ws');
const wss = new webSocket.Server({ noServer: true });
wss.on('connection', function connection(ws) {
	// Set up a listener for when the collection changes.
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(databaseName);
        var collection = dbo.collection(collectionName)
		changeStream = collection.watch();
		changeStream.on("change", next => {
			// Process any change event
			loadData(ws)
		})
    });
});

function loadData(ws) {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db(databaseName);
		var collection = dbo.collection(collectionName)
		collection.find({}).toArray( 
		function(err, result) {
			if (err) throw err;
			console.log("Data loaded from MongoDB.")
			//console.log(result)
			data = result;
			db.close();
			if (ws) {
				ws.send(JSON.stringify({data}))
			}
		});
	});
}

async function main(){
	// Original listener was here
	loadData()
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

	MongoClient.connect(url, function(err, db) {
		if (err) throw err
		var dbo = db.db(databaseName);
        dbo.collection(collectionName).insertOne(newChore, function(err, res) {
			if (err) throw err;
			console.log("Chore successfully inserted.");
			console.log(res)
			db.close();

			data.push(newChore)
		});
	});
})

app.post('/delete', function(req, res) {
	// This formatting needs to be better defined later.
	var toDelete = req.body.id
	console.log(toDelete)

	MongoClient.connect(url, function(err, db) {
		if (err) throw err
		var dbo = db.db(databaseName);
        dbo.collection(collectionName).deleteOne({id: toDelete}, function(err, res) {
			if (err) throw err;
			console.log("Chore successfully deleted.");
			console.log(res)
			db.close();

			const del = data.filter(data => (toDelete !== data.id))
			data = del
		});
	});
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