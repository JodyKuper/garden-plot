import React from 'react'
import { useEffect, useState } from "react";
import {useParams, Link} from "react-router-dom"
import { Form, Button } from "react-bootstrap";
import {PlotView} from "./PlotView";

const Plot = ({user}) => {
	const[plot, setPlot]= useState([])
	const[name,setName]=useState("")
	const[neededSun, setNeededSun]=useState("")
	let {id} =useParams()

	const handleChange=(e)=> {
		if (e.target.id === "name") setName(e.target.value)
		if (e.target.id === "need_sun") setNeededSun(e.target.value)
	}

	useEffect(()=> {
		fetch(`/plots/${id}`)
		 	.then((res) => res.json())
		    .then ((data)=> {
				setPlot(data)
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
				console.log(data)
				// debugger
				if (!!data.id){
				console.log(data)

				}else{
					alert(data["error"])
				}
			})
	 }
console.log(user)
	 const handleDelete = () => {
		fetch(`/plots/${id}`, {
		  method: "DELETE",
		  header: {
			Accepts: "application/json",
		  },
		});

	  };
	console.log(plot.plants)
	return (
		<div>
			plot
			<br></br>

			<PlotView plot={plot} />
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

			<Link onClick={() => handleDelete()} to={`/gardens/${user && user.garden && user.garden.id}`}>
				DELETE PLOT
			</Link>
		</div>

	)
}
export default Plot
