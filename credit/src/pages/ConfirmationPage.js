import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

let usernames = ['Anirudh', 'Prakash', 'Rakesh', 'Leo', 'Pavan', 'Sandeep', 'Rohan', 'Shravan', 'Rohit', 'Dhruv'];

class ConfirmationPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
	      sender: '',
	      recipient: '',
	      amount: 0
    	};
    	this.handleClick = this.handleClick.bind(this);
	}

  	componentDidMount() {
  		this.setState({sender: this.props.location.state.senderName, 
  			amount: this.props.location.state.transactionAmount, recipient: this.props.location.state.recipientName}, () => {
  				document.getElementById("sender").innerHTML = this.state.sender;
		  		document.getElementById("recipient").innerHTML = this.state.recipient;
		  		document.getElementById("amount").innerHTML = this.state.amount;
  			});
  	}

  	handleClick() {
  		fetch('https://credit-management-api.herokuapp.com/users', {
		    method: 'POST',
		    body: JSON.stringify(this.state),
		    headers: {
    			'Content-Type': 'application/json',
    			'accept':'application/json'
  			}
		  }).then(function(response) {
		    console.log("Successful");
		  }).catch(console.log("error"));
	  	}

	render() {
		return (
			<div className="App">
				<div className="heading">
					<h1>Confirmation Page</h1>
				</div>
				<hr />
				<div className="container ani rounded-lg">
					<table className="table table-striped">
					  <tr>
					    <th>Sender</th>
					    <td id="sender">Hello</td>
					  </tr>
					  <tr>
					    <th>Recipient</th>
					    <td id="recipient">Hello</td>
					  </tr>
					  <tr>
					    <th>Amount</th>
					    <td id="amount">Hello</td>
					  </tr>
					</table>
				</div>
				<br />
				<hr />
				<div>
					<form>
						<div className="container2">
							<Link to={{
								pathname: '/',
								
							}}><button type="submit" className="btn btn-success" onClick={this.handleClick}>Confirm Transaction</button></Link>
						</div>
					</form>
				</div>

		    </div>
		)
	}
}

export default ConfirmationPage;