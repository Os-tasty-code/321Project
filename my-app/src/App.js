import React from 'react'

import './App.css'
import axios from 'axios'

const baseURL = 'localhost:9000'
const socketURL = 'ws://' + baseURL + '/api'
function ChoreTable() {
	// Handles the chore data.
	const [data, setData] = React.useState([])
	const [input, setInput] = React.useState({
		//id: 1,
		name: "",
		assignedTo: "",
		desc: ""
	})

	React.useEffect(() => {
		getData()
	}, [])

	// Part of the websocket code.
	const [ws, setWs] = React.useState(new WebSocket(socketURL))
	const [message] = React.useState([])
	const [messages, setMessages] = React.useState([])
	
	// Establish a websocket so we can send the client data after they've already loaded the page
	// Used to update the page when the database entries change
	React.useEffect(() => {
		ws.onopen = () => {
			console.log('WebSocket Connected')
		}

		ws.onmessage = (e) => {
			console.log(e.data)
			console.log(JSON.parse(e.data))
			var parsedData = JSON.parse(e.data)
			setData(parsedData.data)
			setMessages([message, ...messages])
		}
	
		return () => {
			ws.onclose = () => {
				console.log('WebSocket Disconnected')
				setWs(new WebSocket(socketURL))
			}
		}
	}, [ws.onmessage, ws.onopen, ws.onclose, messages])

	async function getData() {
		// Make a request for a user with a given chore ID
		axios.get('http://' + baseURL + '/api')
			.then(function (responseAx) {
				// Handle success
				console.log(responseAx)
				setData(responseAx.data)
			})
			.catch(function (error) {
				// Handle error
				console.log(error)
			})
			.then(function () {
				// Always executed
			})

		//setData(response.data)
	}

	function removeData(_id) {
		const del = data.filter(data => (_id !== data._id))
		setData(del)

		// Send the delete request to the database.
		const toSend = {_id: _id,}
		axios.post('http://' + baseURL + '/delete', toSend).then(() => {
			console.log('Chore deletion sent.')
			}).catch(err => {
		  		console.error(err)
			})
	}

	function addData() {
		// There's probably a nicer way to iteratively check these.
		//if (input.id === "") { return }
		if (input.name === "") { return }
		if (input.assignedTo === "") { return }
		if (input.desc === "") { return }

		setData(data => [...data, input])

		const toSend = {
			name: input.name,
			assignedTo: input.assignedTo,
			desc: input.desc
		}

		axios.post('http://' + baseURL + '/create', toSend).then(() => {
			console.log('Chore addition sent.')
			}).catch(err => {
		  		console.error(err)
			})
	}

	function renderHeader() {
		return (
			<tr>
				<th key={"Input" + 1}>Chore Name</th>
				<th key={"Input" + 2}>Assigned To</th>
				<th key={"Input" + 3}>Description</th>
				<th key={"Input" + 4}>Operation</th>
			</tr>
		)
	}

	function renderBody() {
		return data && data.map(({ _id, name, assignedTo, desc }) => {
			return (
				<tr key={_id}>
					<td>{name}</td>
					<td>{assignedTo}</td>
					<td>{desc}</td>
					<td className='operation'>
						<button className='button' type='button' class='deleteButton' onClick={() => removeData(_id)}>Delete</button>
					</td>
				</tr>
			)
		})
	}

	function handleChange(event) {
		const name = event.target.name
		const value = event.target.value
		setInput({
			...input,
			[name]: value
		})
	}

	function renderInputs() {
		var output = []
		output.push(<div>
			<br></br>
			Add a new chore:
			<br></br></div>)

		output.push(
			<div>
				Chore Name:
				<input
					type="text"
					name="name"
					value={input.name}
					onChange={handleChange} />
				<br></br>
				Assigned To:
				<input
					type="text"
					name="assignedTo"
					value={input.assignedTo}
					onChange={handleChange} />
				<br></br>
				Description:
				<input
					type="text"
					name="desc"
					value={input.desc}
					onChange={handleChange} />
				<br></br>
				<button className='button' type='button' class='addButton' onClick={() => addData()}>Add</button>
			</div>
		)
		return output
	}

	return (
		<><center>
			<h1 id='title'>Chore List</h1>
			<table id='data'>
				<thead data-testid='header'>
					{renderHeader()}
				</thead>
				<tbody data-testid='body'>
					{renderBody()}
				</tbody>
			</table>

			<div data-testid='inputs'>
			{renderInputs()}
			</div>
		</center></>
	)
}

export default ChoreTable
