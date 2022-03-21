import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Logout extends Component {
	state = {
		loggedOut: false,
	}
	logoutHandler = () => {
		localStorage.removeItem('user')
		this.props.history.push('/login')
	}
	render() {
		if (this.state.loggedOut) {
			return <Redirect to="/" />
		}
		return (
			<div>Logout form...</div>
		)
	}
}
