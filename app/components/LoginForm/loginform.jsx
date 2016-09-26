import React, { Component } from 'react';
import { Link } from 'react-router';
import PasswordReset from 'D:/WorkSpace/Learning/emarket/app/components/PasswordReset/passwordreset.jsx';

class Login extends Component{
	render (){
		return (
			<div className='form'>
				<div className='form-element'>
					<label>User Name</label>
					<input type='text' name='username'/>
				</div>

				<div className='form-element'>
					<label>Password</label>
					<input type='text' name='password'/>
					<Link to='passwordreset'>Forgot Password</Link>				
				</div>

				<div>
					<input type='button' name='save' value ='Submit'/>
					<input type='button' name='save' value ='Reset'/>
				</div>
				
			</div>
			)
	}
}


export default Login