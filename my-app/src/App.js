import React, { useState, useEffect } from 'react'
import { unmountComponentAtNode} from "react-dom";
import './App.css'
//website: https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/
//used for connecting React with Express

//import axios from 'axios'
//const URL = 'https://jsonplaceholder.typicode.com/users'

//connecting Express and React
//ReactDOM.mountComponentAtNode(component); 

const Table = () => {
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

	const getData = async () => {
		// const response = await axios.get(URL)
		const response = {
			// Ideally these would have a unique ID for each one.
			data: [
				{
					"id": 1,
					"name": "Clean dishes",
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
		}
		setData(response.data)
	}

	const removeData = (id) => {
		// Send the delete request to the database.
		/* axios.delete(`${URL}/${id}`).then(res => {
			const del = data.filter(data => id !== data.id)
			setData(del)
		)*/
		const del = data.filter(data => (id !== data.id))
		setData(del)
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
		for (let i=0; i<data.length; i++) {
			if (Number(data[i].id) === inputNum){ return }
		}
		setData(data => [...data,input]);
	}
	const renderHeader = () => {
		return (
			<tr>
			<th key={"Input"+1}>Chore ID</th>
			<th key={"Input"+2}>Chore Name</th>
			<th key={"Input"+3}>Assigned To</th>
			<th key={"Input"+4}>Description</th>
			<th key={"Input"+5}>Operation</th>
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
						<button className='button' class='deleteButton' onClick={() => removeData(id)}>Delete</button>
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
				type = "number"
				name = "id"
				min = {0}
				value = {input.id}
				onChange = {handleChange} />
			<br></br>
			Chore Name:
			<input
				type = "text"
				name = "name"
				value = {input.name}
				onChange = {handleChange} />
			<br></br>
			Assigned To:
			<input
				type = "text"
				name = "assignedTo"
				value = {input.assignedTo}
				onChange = {handleChange} />
			<br></br>
			Description:
			<input
				type = "text"
				name = "desc"
				value = {input.desc}
				onChange = {handleChange} />
			<br></br>
			<button className='button' class='addButton' onClick={() => addData()}>Add</button>
			</div>
		)
		return output;
	}

	const clear = () => {
		unmountComponentAtNode(document.getElementById('root'));
	}

	const changeWebpage = () => {
		var out = [];
		out.push(
			<div>
				<button className='button' class='addButton' onClick={() => clear()}>To Clear</button>
			</div>
			//<button className='button' class='addButton' onClick={routeChange}>New Webpage</button>
		)
		return out;
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
			{changeWebpage()}
			</center>
		</>
	)
}

export default Table
