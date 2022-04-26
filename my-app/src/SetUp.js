import React, { useState, useEffect } from 'react'
import { unmountComponentAtNode } from "react-dom";
import './SetUp.css'
import './Classes/Home.js'
import './navbar.js'
import axios from 'axios'
import Home from './Classes/Home.js';

const SetUp = () => {
    var home = new Home("", [],[],"","","");
	const [data, setData] = useState([])
	const [input, setInput] = useState({
		id: home.id,
		name: "",
	})
	useEffect(() => {
		//getData()
	}, [])

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

	// const removeData = (id) => {
	// 	// Send the delete request to the database.
	// 	/* axios.delete(`${URL}/${id}`).then(res => {
	// 		const del = data.filter(data => id !== data.id)
	// 		setData(del)
	// 	)*/
	// 	const del = data.filter(data => (id !== data.id))
	// 	setData(del)
	// }
	const addData = (id) => {
		if (input.id === "") { return }
		if (input.name === "") { return }

		setData(data => [...data, input]);
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
                Name:
				<input
					type="text"
					name="name"
					value={input.name}
					onChange={handleChange}/>
				<br></br>
				<p></p>
				Enter House Type:
				<br></br>
					<button className='button' class='addButton'>Parent-Child</button>
				<input
					type="radio"
					id = "r"
					name="type"
					value="roomate"
					onChange={renderMembers()} />
				<label>Roommates</label><br></br>
				<br></br>
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
				<setup id='data'>
                    {renderInputs()}
					{renderMembers()}
				</setup>
			</center>
		</>
	)
}
export default SetUp