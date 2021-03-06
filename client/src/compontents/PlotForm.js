import React from 'react'
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom"

 const PlotForm = ({user}) => {
	 const[name, setName]=useState("")
	 const[width, setWidth]=useState("")
	 const[length, setLength]=useState("")
	 const[sun, setSun]=useState("")
	 const history= useHistory()

	 const handleChange=(e)=> {
		if (e.target.id === "name") setName(e.target.value)
		if (e.target.id === "width") setWidth(e.target.value)
		if (e.target.id === "length") setLength (e.target.value)
		if (e.target.id === "sun") setSun(e.target.value)
	 }

	 const plotSubmit=(e)=> {
		e.preventDefault()
		const postPlot= {
			method: "POST",
			headers: {
			"Content-Type": "application/json",
				},
			body: JSON.stringify({
				name,
				width,
				length,
				sun,
				garden_id:user.garden.id
			})	
			}
			fetch("/plots", postPlot)
			.then ((res)=> res.json())
			.then((data) => {
				if (!!data.id){	
				history.push(`/gardens/${user.garden.id}`)
				}else{
					alert(data["error"])
				}	
			})
	 }
	 
	 return (
		<div>
		<h2>make plots</h2>
		<Form onSubmit={plotSubmit}>
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
			id="width"
			placeholder="width"
			value={width}
			onChange={handleChange}
			/>
		<Form.Control
			size=""
			type="text"
			id="length"
			placeholder="length"
			value={length}
			onChange={handleChange}
			/>
			<br></br>
			<br></br>
		{ <Form.Control
			size=""
			type="text"
			id="sun"
			placeholder=""
			value={sun}
			onChange={handleChange}
			/> }
          
		</Form.Group>
		<br></br>			
		<Button type="submit" >Submit</Button>
		</Form>
		<p style={{display: "inline-block",
				width: `${width*20}px`,
				height: `${length*20}px`,
				background: "#80461b",
				margin: "5px"
			}}>{name}<br></br>{sun}<br></br>
			</p>
		</div>
	)
}
export default PlotForm