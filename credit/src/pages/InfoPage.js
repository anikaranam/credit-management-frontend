import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class InfoPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			apiResponse: [{
	        "PhoneNumber": '',
        	"Email": '',
        	"Balance": ''
	      }],
	      amount: 0
		}
		this.handleChange = this.handleChange.bind(this);
	}

	callAPI() {
      fetch("http://localhost:9000/users?name=" + this.props.location.state.name)
        .then(res => res.json())
        .then((data) => {
          this.setState({ apiResponse: data });
          console.log(this.state.apiResponse);
          document.getElementById("phonenumber").innerHTML = this.state.apiResponse[0]["PhoneNumber"];
  		  document.getElementById("email").innerHTML = this.state.apiResponse[0]["Email"];
  		  document.getElementById("balance").innerHTML = this.state.apiResponse[0]["Balance"];
        })
        .catch(() => {
          console.log('error');
        });
  	}

  	componentWillMount() {
		this.setState({name: this.props.location.state.name})
  		this.callAPI();
  	}

  	componentDidUpdate() {
  		document.getElementById("phonenumber").innerHTML = this.state.apiResponse[0]["PhoneNumber"];
  		document.getElementById("email").innerHTML = this.state.apiResponse[0]["Email"];
  		document.getElementById("balance").innerHTML = this.state.apiResponse[0]["Balance"];
  	}

  	handleChange(event) {
  		this.setState({amount: event.target.value}, () => {
  			if (parseInt(this.state.amount, 10) > parseInt(document.getElementById("balance").innerHTML = this.state.apiResponse[0]["Balance"], 10)) {
  				document.getElementById('confirm').disabled = true;
  			} else {
  				document.getElementById('confirm').disabled = false;
  			}
  		});
  	}

	render() {
		return (
			<div className="info">
				<h1 className="InfoHeader">{this.state.name}</h1>
				<div className="container ani rounded-lg">
					<table className="table table-striped">
					  <tr>
					    <th>Phone Number</th>
					    <td id="phonenumber">Hello</td>
					  </tr>
					  <tr>
					    <th>Email ID</th>
					    <td id="email">Hello</td>
					  </tr>
					  <tr>
					    <th>Current Balance</th>
					    <td id="balance">Hello</td>
					  </tr>
					</table>
				</div>
				<div className="transferamount">
					<div className="container ani3">
						<div className="form-group row center-block">
							<label className="col-sm-3 col-form-label">Enter Transfer Amount : </label>
							<div class="col-sm-4">
	      						<input type="email" className="form-control" id="inputEmail3" placeholder="Amount in Rupees" onChange={this.handleChange}/>
	   						</div>
						</div>
					</div>
				</div>
				<div className="container info-button">
					<Link to={{
								pathname: '/recipient',
								state: {
									name: this.state.name,
									amount: this.state.amount
								}
							}}><button id="confirm" className="btn btn-primary">Select Recipient</button></Link>
				</div>
			</div>
		)
	}
}

export default InfoPage;