import React, { useState, useEffect } from 'react'

import './App.css'
import axios from 'axios'

const URL = 'ws://localhost:9000/api'
const Table = () => {
	const [ws, setWs] = useState(new WebSocket(URL));

	const [message] = useState([]);
	const [messages, setMessages] = useState([]);

	const [data, setData] = useState([])
	const [input, setInput] = useState({
		id: 1,
		name: "",
		assignedTo: "",
		desc: ""
	})
	useEffect(() => {
		getData()
	}, [])

	// Set ID to the next highest number initially
	/*let setHighest = false
	function loadHighest() {
		if (!setHighest) {
			let highest = 0;
			for (let i=0; i<data.length; i++) {
				let num = Number(data[i].id)
				if (num > highest){ highest = num }
			}
			
			setInput({
				...input,
				["id"]: highest+1
			})

			console.log(input.id)
			setHighest = true
		}
	}*/

	useEffect(() => {
		ws.onopen = () => {
			console.log('WebSocket Connected');
		}
	
		ws.onmessage = (e) => {
			console.log(e.data)
			console.log(JSON.parse(e.data))
			var parsedData = JSON.parse(e.data)
		  setData(parsedData.data);
		  setMessages([message, ...messages]);
		}
	
		return () => {
			ws.onclose = () => {
				console.log('WebSocket Disconnected');
				setWs(new WebSocket(URL));
			}
		}
	}, [ws.onmessage, ws.onopen, ws.onclose, messages]);


	const getData = async () => {
		// Make a request for a user with a given ID
		axios.get('http://localhost:9000/api')
			.then(function (responseAx) {
				// handle success
				console.log(responseAx);
				setData(responseAx.data)
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});

		//setData(response.data)
	}

	const removeData = (id) => {

		const del = data.filter(data => (id !== data.id))
		setData(del)

		// Send the delete request to the database.
		const toSend = {id: id,}
		axios.post('http://localhost:9000/delete', toSend).then(() => {
			console.log('Chore deletion sent.')
			}).catch(err => {
		  		console.error(err);
			});
	}
	const addData = (id) => {
		// Probably a nicer way to iteratively check these.
		if (input.id === "") { return }
		if (input.name === "") { return }
		if (input.assignedTo === "") { return }
		if (input.desc === "") { return }

		// Make sure we have a unique ID.
		// Just generate it instead of trying to force the user to make one.
		let inputNum = Number(input.id);
		for (let i = 0; i < data.length; i++) {
			if (Number(data[i].id) === inputNum) { return }
		}
		setData(data => [...data, input]);

		const toSend = {
			id: input.id,
			name: input.name,
			assignedTo: input.assignedTo,
			desc: input.desc
		}

		axios.post('http://localhost:9000/create', toSend).then(() => {
			console.log('Chore addition sent.')
			}).catch(err => {
		  		console.error(err);
			});
	}
	const renderHeader = () => {
		return (
			<tr>
				<th key={"Input" + 1}>Chore ID</th>
				<th key={"Input" + 2}>Chore Name</th>
				<th key={"Input" + 3}>Assigned To</th>
				<th key={"Input" + 4}>Description</th>
				<th key={"Input" + 5}>Operation</th>
			</tr>
		)
	}
	const renderBody = () => {
		return data && data.map(({ id, name, assignedTo, desc }) => {
			return (
				<tr key={id}>
					<td>{id}</td>
					<td>{name}</td>
					<td>{assignedTo}</td>
					<td>{desc}</td>
					<td className='operation'>
						<button className='button' type='button' class='deleteButton' onClick={() => removeData(id)}>Delete</button>
					</td>
				</tr>
			)
		})
	}

	const handleChange = evt => {
		const name = evt.target.name;
		const value = evt.target.value;
		setInput({
			...input,
			[name]: value
		})
	}
	const renderInputs = () => {
		var output = []
		output.push(<div>
			<br></br>
			Add a new chore:
			<br></br></div>)

		output.push(
			<div>
				ID:
				<input
					type="number"
					name="id"
					min={0}
					value={input.id}
					onChange={handleChange} />
				<br></br>
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
		return output;
	}

	return (
		<>
			<center>
				<h1 id='title'>Chore List</h1>
				<table id='data'>
					<thead>
						{renderHeader()}
					</thead>
					<tbody>
						{renderBody()}
					</tbody>
				</table>

				{renderInputs()}
			</center>
		</>
	)
}

export default Table
