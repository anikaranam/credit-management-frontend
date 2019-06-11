import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

let usernames = ['Anirudh', 'Prakash', 'Rakesh', 'Leo', 'Pavan', 'Sandeep', 'Rohan', 'Shravan', 'Rohit', 'Dhruv'];

class RecipientPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
	      sender: '',
	      recipient: '',
	      amount: 0
    	};
    	this.handleClick = this.handleClick.bind(this);
	}

	setNames() {
		for (let i = 0; i < 10; i++) {
			document.getElementById('user' + i).innerHTML = this.state.apiResponse[i].Name;
		}
	}

	 callAPI() {
      fetch("https://credit-management-api.herokuapp.com/users")
        .then(res => res.json())
        .then((data) => {
          this.setState({ apiResponse: data });
          console.log(this.state.apiResponse);
          this.setNames();
        })
        .catch(() => {
          console.log();
        });
  	}

  	componentDidMount() {
  		this.callAPI();
  		this.setState({sender: this.props.location.state.name, amount: this.props.location.state.amount});
  		let nameIndex = usernames.indexOf(this.props.location.state.name);
  		var inputs = document.getElementsByName('optradio');
  		for (let i = 0; i < inputs.length; i++) {
  			if (i == nameIndex) {
  				inputs[i].disabled = true;
  			}
  		}
  	}

  	handleClick() {
  		var inputs = document.getElementsByName('optradio');
  		for (let i = 0; i < inputs.length; i++) {
  			if (inputs[i].checked) {
  				console.log(usernames[i]);
  				this.setState({recipient: usernames[i]});
  			}
  		}
  	}

	render() {
		return (
			<div className="App">
				<div className="heading">
					<h1>Select Recipient</h1>
				</div>
				<hr />
				<div>
					<form>
						<div className="radiogroup">
								<input type="radio" name="optradio" id="0" onClick={this.handleClick}/><label id="user0"></label><br />
								<input type="radio" name="optradio" id="1" onClick={this.handleClick}/><label id="user1"></label><br />
								<input type="radio" name="optradio" id="2" onClick={this.handleClick}/><label id="user2"></label><br />
								<input type="radio" name="optradio" id="3" onClick={this.handleClick}/><label id="user3"></label><br />
								<input type="radio" name="optradio" id="4" onClick={this.handleClick}/><label id="user4"></label><br />
								<input type="radio" name="optradio" id="5" onClick={this.handleClick}/><label id="user5"></label><br />
								<input type="radio" name="optradio" id="6" onClick={this.handleClick}/><label id="user6"></label><br />
								<input type="radio" name="optradio" id="7" onClick={this.handleClick}/><label id="user7"></label><br />
								<input type="radio" name="optradio" id="8" onClick={this.handleClick}/><label id="user8"></label><br />
								<input type="radio" name="optradio" id="9" onClick={this.handleClick}/><label id="user9"></label><br />
						</div>
						<div className="container2">
							<Link to={{
								pathname: '/confirm',
								state: {
									senderName: this.state.sender,
									recipientName: this.state.recipient,
									transactionAmount: this.state.amount
								}
							}}><button type="submit" className="btn btn-primary" >View detailed information</button></Link>
						</div>
					</form>
				</div>

		    </div>
		)
	}
}

export default RecipientPage;