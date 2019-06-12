import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


let usernames = ['Anirudh', 'Prakash', 'Rakesh', 'Leo', 'Pavan', 'Sandeep', 'Rohan', 'Shravan', 'Rohit', 'Dhruv'];

class Users extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
	      apiResponse: [{
	        "Name": ''
	      }],
	      user: ''
    	};
    	this.handleChange = this.handleChange.bind(this);
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
  	}
  	handleChange(event) {
  		var buttons = document.getElementsByClassName('radiogroup');
  		var inputs = document.getElementsByName('optradio');
  		for (let i = 0; i < inputs.length; i++) {
  			if (inputs[i].checked) {
  				console.log(usernames[i]);
  				this.setState({user: usernames[i]});
  			}
  		}
  		document.getElementById(event.target.id).checked = true;
  		event.preventDefault();
  	}

  	handleClick() {
  		var buttons = document.getElementsByClassName('radiogroup');
  		var inputs = document.getElementsByName('optradio');
  		for (let i = 0; i < inputs.length; i++) {
  			if (inputs[i].checked) {
  				console.log(usernames[i]);
  				this.setState({user: usernames[i]});
  			}
  		}
  	}

	render() {
		return (
			<div className="App">
				<div className="heading">
					<h1>List of Users</h1>
				</div>
				<hr />
				<div>
					<form>
						<div className="radiogroup">
								<h1>Hello</h1>
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
								pathname: '/info',
								state: {
									name: this.state.user
								}
							}}><button type="submit" className="btn btn-primary" >View detailed information</button></Link>
						</div>
					</form>
				</div>

		    </div>
		)
	}
}

export default Users;