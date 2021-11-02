import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import React from 'react'


      

const Header = ({ loggedIn, handleLogout }) => {
	if (loggedIn) {
	return (
		<header>
		 <Button onClick={handleLogout}>Logout</Button><br></br>
		 <br></br>
		 
    		  </header>
    )
 	 } else {
    	return (
      <header>
        <Link to='/login'>Login</Link><br></br>
        <Link to='/signup'>Signin</Link>

	</header>
	)
		}			
}
export default Header