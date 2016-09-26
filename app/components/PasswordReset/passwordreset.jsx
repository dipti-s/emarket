import React, { Component } from 'react'

class PasswordReset extends Component{
	render (){
		return (
			<div className='form'>
				<div className='form-element'>
					<label>New Passowrd</label>
					<input type='text' name='username'/>
				</div>
				<div className='form-element'>
					<label>Confiem Password</label>
					<input type='text' name='password'/>
				</div>
			</div>
			)
	}
}


export default PasswordReset