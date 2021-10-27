import React from 'react'
import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap";

 const PlantForm = () => {
	 const[name,setName]=useState("")
	 const[neededSun, setNeededSun]=useState("")

	 const handleChange=(e)=> {
		 if (e.target.id === "name") setName(e.target.value)
		 if (e.target.id === "need_sun") setNeededSun(e.target.value)
	 }

	 const plantSubmit=(e)=> {
		e.preventDefault()
		const postGame= {
			method: "POST",
			headers: {
			"Content-Type": "application/json",
				},
			body: JSON.stringify({
				name,
				
			})	
			}
			fetch("/plots", postGame)
			.then ((res)=> res.json())
			.then((data) => {
				console.log(data)
				// debugger
				if (!!data.id){	
				console.log(data)
				
				}else{
					alert(data["error"])
				}	
			})
	 }

	return (
		<div>
		Plant!!!
		<Form onSubmit={plantSubmit}>
		<Form.Group controlId="formFile" className="mb-3">
		<Form.Control
			size=""
			type="text"
			id="name"
			placeholder="name"
			value={name}
			onChange={handleChange}
			/>
			<br></br>
			<br></br>
		<Form.Control
			size=""
			type="text"
			id="need_sun"
			placeholder=""
			value={''}
			onChange={handleChange}
			/>
		
          
		</Form.Group>
		<br></br>			
		<Button type="submit">Submit</Button>

		</Form>
	
		</div>
	)
}
export default PlantForm