import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './SetUp.css'

const Login = () => {
	// const [ws, setWs] = React.useState(new WebSocket(socketURL))
	// const [message] = React.useState([])
	// const [messages, setMessages] = React.useState([])

	// const [status, setStatus] = React.useState(0)
	const [input, setInput] = useState({
		username: "",
		password: ""
	})
	// React.useEffect(() => {
	// 	ws.onopen = () => {
	// 		console.log('WebSocket Connected');
	// 	}
	// },[])

	// React.useEffect(() => {
	// 	ws.onopen = () => {
	// 		console.log('WebSocket Connected')
	// 	}

	// 	ws.onmessage = (e) => {
	// 		//console.log(e.data)
	// 		//console.log(JSON.parse(e.data))
	// 		console.log("Data updated from Websocket.")
	// 		var parsedData = JSON.parse(e.data)
	// 		setData(parsedData.data)
	// 		setMessages([message, ...messages])
	// 		setStatus(0)
	// 	}

	// 	return () => {
	// 		ws.onclose = () => {
	// 			console.log('WebSocket Disconnected')
	// 			setWs(new WebSocket(socketURL))
	// 		}
	// 	}
	// }, [ws.onmessage, ws.onopen, ws.onclose, messages])

	// const checkData = async () => {
	// 	const toSend = {username: escapeHTML(input.name), password: escapeHTML(input.pass),};
		
	// 	axios.post('http://' + baseURL + '/check', toSend).then(() => {
	// 		console.log('Chore deletion sent.')
	// 		}).catch(err => {
	// 	  		console.error(err)
	// 			removeData(_id)
	// 		})
	// }

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
					value={input.name}
					onChange={handleChange}/>
				<br></br>
				<p></p>
				Password
				<br></br>
				<input
					type="text"
					name="password"
					value={input.pass}
					onChange={handleChange}/>
				<br></br>
				<p></p>
				<button type='button' class='submit'>Submit</button>
			</div>
		)
		return output;
	}

	return (
		<>
			<center>
				<h1 id='title'>Login</h1>
				<setup>
                    {renderInputs()}
				</setup>
			</center>
		</>
	)
}
export default Login