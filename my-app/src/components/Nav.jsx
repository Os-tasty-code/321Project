import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import './Nav.css'

const Nav = () => {
    //need to add nav bar to pages
    //need proper links in href tag
    return (
	<div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark" display="table-header-group">
        <div className="container">
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Chores
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Set Up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
	)
}
export default Nav