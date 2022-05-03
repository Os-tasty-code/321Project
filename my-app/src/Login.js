import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './SetUp.css'

const Login = () => {
	const [ws, setWs] = React.useState(new WebSocket(socketURL))
	const [message] = React.useState([])
	const [messages, setMessages] = React.useState([])

	const [status, setStatus] = React.useState(0)
	const [input, setInput] = useState({
		username: "",
		password: ""
	})
	React.useEffect(() => {
		ws.onopen = () => {
			console.log('WebSocket Connected');
		}
	},[])

	React.useEffect(() => {
		ws.onopen = () => {
			console.log('WebSocket Connected')
		}

		ws.onmessage = (e) => {
			//console.log(e.data)
			//console.log(JSON.parse(e.data))
			console.log("Data updated from Websocket.")
			var parsedData = JSON.parse(e.data)
			setData(parsedData.data)
			setMessages([message, ...messages])
			setStatus(0)
		}

		return () => {
			ws.onclose = () => {
				console.log('WebSocket Disconnected')
				setWs(new WebSocket(socketURL))
			}
		}
	}, [ws.onmessage, ws.onopen, ws.onclose, messages])

	const checkData = async () => {
		// Make a request for a user with a given ID
		axios.get('http://localhost:9000/user')
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
                Username
				<br></br>
				<input
					type="text"
					name="username"
					value={input.username}
					onChange={handleChange}/>
				<br></br>
				<p></p>
				Username
				<br></br>
				<input
					type="text"
					name="password"
					value={input.password}
					onChange={handleChange}/>
				<br></br>
			</div>
		)
		return output;
	}

	return (
		<>
			<center>
				<h1 id='title'>Home Setup</h1>
				<setup id='data'>
                    {renderInputs()}
				</setup>
			</center>
		</>
	)
}
export default Login