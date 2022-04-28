import React, { useState, useEffect } from 'react'
import './Nav.css'

const Nav = () => {
    //need to add nav bar to pages
    //need proper links in href tag
    return (
		<>
			<center>
				<setup id='nav'>
                    <ul>
                        <li><a href="/indexSetup.html">Home</a></li>
                        <li><a href="">Chores</a></li>
                        <li><a href="">Account</a></li>
                        <li><a href="">Profile</a></li>
                    </ul>
				</setup>
			</center>
		</>
	)
}
export default Nav