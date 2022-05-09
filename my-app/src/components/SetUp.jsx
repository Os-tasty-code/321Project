import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './SetUp.css'
import Home from '../classes/Home.js';

const SetUp = () => {
    var home = new Home("", [],[],"","","");
	// const [ws, setWs] = useState(new WebSocket(URL));

	// const [message] = useState([]);
	// const [messages, setMessages] = useState([]);

	const [data, setData] = useState([])
	const [input, setInput] = useState({
		id: home.id,
		name: home.name,
		users: home.users
	})
	// useEffect(() => {
	// 	ws.onopen = () => {
	// 		console.log('WebSocket Connected');
	// 	}
	
	// 	ws.onmessage = (e) => {
	// 		console.log(e.data)
	// 		console.log(JSON.parse(e.data))
	// 		var parsedData = JSON.parse(e.data)
	// 	  setData(parsedData.data);
	// 	  setMessages([message, ...messages]);
	// 	}
	
	// 	return () => {
	// 		ws.onclose = () => {
	// 			console.log('WebSocket Disconnected');
	// 			setWs(new WebSocket(URL));
	// 		}
	// 	}
	// }, [ws.onmessage, ws.onopen, ws.onclose, messages]);
	// const getData = async () => {
	// 	// Make a request for a user with a given ID
	// 	axios.get('http://localhost:9000/api')
	// 		.then(function (responseAx) {
	// 			// handle success
	// 			console.log(responseAx);
	// 			setData(responseAx.data)
	// 		})
	// 		.catch(function (error) {
	// 			// handle error
	// 			console.log(error);
	// 		})
	// 		.then(function () {
	// 			// always executed
	// 		});

	// 	//setData(response.data)
	// }

	const addData = (id) => {
		if (input.id === "") { return }
		if (input.name === "") { return }

		setData(data => [...data, input]);

		const toSend = {
			id: input.id,
			name: input.name,
			users: input.users
		}

		axios.post('http://localhost:9000/create', toSend).then(() => {
			console.log('Chore addition sent.')
			}).catch(err => {
		  		console.error(err);
			});
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
		output.push(
			<div>
                House Name: 
				<input
					type="text"
					name="name"
					value={input.name}
					onChange={handleChange}/>
				<br></br>
				<p></p>
				Enter House Type:
				<br></br>
				<br></br>
				<input
					type="radio"
					id = "r"
					name="type"
					value="parent-child"
					onChange={handleChange}/>
				<label>Parent-Child</label>
				<input
					type="radio"
					id = "r"
					name="type"
					value="roomate"
					onChange={handleChange}/>
				<label>Roommates</label><br></br>
				<p></p>
				<button type='button' class='submit'>Submit</button>
			</div>
		)
		return output;
	}

	const renderMembers = () => {
		var output = [];
		output.push(
		<tr>
			<th key={"Input" + 1}>
				<button className='button' class='addButton' onClick={() => addMember()}>Add</button>
			</th>
			<th key={"Input" + 2}>Name</th>
			<th key={"Input" + 3}>Role</th>
			<th key={"Input" + 4}>Change</th>
		</tr>)
			output.push(
				<tr>
					<td>
						<label>1</label>
					</td>
					<td>
					<input
							type="text"
							name="name"
							value={input.name}
							onChange={handleChange}/>
					</td>
					<td>
						<input
							type="radio"
							name="type"
							value="parent"
							onChange={handleChange} />
						<label>Parent</label>
						<input
							type="radio"
							name="type"
							value="child"
							onChange={handleChange} />
						<label>Child</label><br></br>
						<br></br>
						<p></p>
						<button type='button' class='submit'>Submit</button>
					</td>
					<td>
					<button className='button' class='addButton' onClick={() => removeMember()}>Remove</button>
					</td>
				</tr>)
		return output;
	}

	const addMember = () => {

	}

	const removeMember = () => {
		
	}

	return (
		<>
			<center>
				<h1 id='title'>Home Setup</h1>
				<setup>
                    {renderInputs()}
				</setup>
			</center>
		</>
	)
}
export default SetUp