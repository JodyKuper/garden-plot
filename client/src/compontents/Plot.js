import React from 'react'
import { useEffect, useState } from "react";
import {useParams, Link, Redirect} from "react-router-dom"
import { Form, Button } from "react-bootstrap";
import PlotView from "./PlotView"
 
const Plot = ({user}) => {
	const[plot, setPlot]= useState([])
	const[name, setName]=useState("")
	const[plants, setPlants]=useState([])
	let {id} =useParams()
console.log(plants)
	const handleChange=(e)=> {
		if (e.target.id === "name") setName(e.target.value)
		
		
	}

	useEffect(()=> {
		fetch(`/plots/${id}`)
		 	.then((res) => res.json())
		    .then ((data)=> {
				setPlot(data)
				setPlants(data.plants)
			})
	 }, [id])

	 const plantSubmit=(e)=> {
		e.preventDefault()
		const postGame= {
			method: "POST",
			headers: {
			"Content-Type": "application/json",
				},
			body: JSON.stringify({
				name,
				plot_id: plot.id	
			})	
			}
			fetch("/plants", postGame)
			.then ((res)=> res.json())
			.then((data) => {
				console.log(data.name)
				// debugger	
				if (!!data.id){	
				setPlants([...plants, data])
				}else{
					alert(data["error"])
				}	
			})
	 setName('')
		}

	//  if (!user || !user.garden || user.garden.id !== parseInt(id)) {
	// 	return <Redirect to={'/login'}/>;
	
	 const handleDelete = () => {
		fetch(`/plots/${id}`, {
		  method: "DELETE",
		  header: {
			Accepts: "application/json",
		  },
		});
	  
	  };
	
	return (
		<div>
			plot
			<br></br>
            
			<PlotView plot={plot} plants={plants} />
			<br></br>
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
					
		
</Form.Group>
				<br></br>
				<Button type="submit">Submit</Button>

			</Form>

			<Link onClick={() => handleDelete()} to={`/gardens/${user && user.garden && user.garden.id}`}>
				DELETE PLOT
			</Link>
			<br/>
			<Link to={`/gardens/${user && user.garden && user.garden.id}`}>
				GARDEN
			</Link>
		</div>	
	)
	}

export default Plot