import React, { Component } from 'react'

export default class Login extends Component {
  // unutar login komponente ide logika za setovanje usera u localStorage

	state = {
		username: '',
		password: ''
	}
	 handleAuthUser = async () => {
		 const {username, password} = this.state
		// primer api poziva:
		const resp = await fetch(`/api/user?username=${username}&password=${password}`);
		const data = resp.json();
		if (data.isOk) {
			// korisnik je ulogovan, mozes da ga sacuvas u localStorage
			localStorage.setItem('user', JSON.stringify(data.user));
			this.props.history.push('/');
		} else {
			// greska...
		}

	}

	render() {
		return (
			<div>Login forma...</div>
		)
	}
}
