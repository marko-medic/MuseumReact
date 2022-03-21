import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import {Route} from 'react-router-dom'

export default class PrivateRoute extends Component {

	state = {
		loaded: false,
		hasAccess: false,
	}


	checkAccess = async () => {
		// user je korisnik koji je ucitan iz localStorage (koji ima JWT ili bar podatke kao sto su njegov ID i token)
		const user = JSON.parse(localStorage.getItem('user'));

		// samo primer API poziva, ovo zamenis sa tvojim API-em...
		const resp = await fetch(`/api/museum_list?access_token=${user.token}`);
		const data = await resp.json();

		if (data.hasUserAccess) {
			this.setState({ loaded: true });
			this.setState({ hasAccess: true });
		} else {
			this.setState({ loaded: true });
			this.setState({ hasAccess: false });
		}
	}

	componentDidMount() {
		this.checkAccess();
	}

	render() {
		const {user, ...rest} = this.props;
		if (!this.state.loaded) {
			return <p>Loading...</p>
		}
		if (!this.state.hasAccess) {
			// redirect gde god..
				return <Redirect to={`/users/${user.id}/login`} />
		}
		return (
			<Route {...rest} />
		)
	}
}

// Primer kako pozivas ovu komponentu



/*
.... 




	<PrivateRoute route="/nekaZasticenaRuta" component={NekaKomponenta}/>

*/
