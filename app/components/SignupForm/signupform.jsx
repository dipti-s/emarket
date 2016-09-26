import React, { Component } from 'react'
import styles from 'D:/WorkSpace/Learning/emarket/style.css';

class SignUp extends Component{
	render (){
		return (
		<div className='form'> 
			<div className='form-element'>
				<label>First Name:</label>
				<input type='text' name='firstname'/>
			</div>

			<div className='form-element'>
				<label>Last Name:</label>
				<input type='text' name='lastname'/>
			</div>

			<div className='form-element'>
				<label>Phone Number:</label>
				<input type='text' name='phonenumber'/>
			</div>

			<div className='form-element'>
				<label>Email:</label>
				<input type='text' name='email'/>
			</div>

			<div className='form-element'>
				<label>Profile Image:</label>
				<input type='text' name='profileimage'/>
			</div>
			
			<div>
				<input type='button' name='save' value ='Submit'/>
				<input type='button' name='reset' value ='Reset'/>
			</div>
		
		</div>
			)
	}
}


export default SignUp