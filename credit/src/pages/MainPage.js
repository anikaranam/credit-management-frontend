import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const MainPage = () => {
	return (
		<div className="App">
	      <div className="title">
	        <h1>CREDIT MANAGEMENT APP</h1>
	        <hr />
	        <p>This app allows you to view user information and transfer credit from one user to another</p>
	        <hr />
	      </div>
	      <div className="processparent">
	        <div className="process">
	          <ol>
	            <li>Select user to transfer credit from</li>
	            <li>Enter transfer amount</li>
	            <li>Select recipient of transfer</li>
	            <li>Amount successfully transferred!</li>
	          </ol>
	        </div>
	      </div>
	      <hr />
	      <div className="viewButton">
	        <Link to='/users'><button type="button" className="btn btn-success">Get Started</button></Link>
	      </div>
	    </div>
	);
}

export default MainPage;