import React, { Component } from 'react'
import { Link } from 'react-router';


class LoginIndex extends Component{
	render (){
		return (
		<div>
		<Link to='/signup'>Sign Up</Link>
    	<Link to='/login'>Login</Link>
    	</div>
			)
	}
}


export default LoginIndex