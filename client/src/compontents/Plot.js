import React from 'react'
import { useEffect, useState } from "react";
import {useParams, Link} from "react-router-dom"


 const Plot = () => {
	const[plot, setPlot]= useState([])
	let {id} =useParams()


	useEffect(()=> {
		fetch(`/plots/${id}`)
		 	.then((res) => res.json())
		    .then ((data)=> {
		
				setPlot(data)
			})
	 }, [])
	console.log(plot)
	return (
		<div>
			plot
			<br></br>

			<p style={{display: "inline-block",
				width: `${plot.width*20}px`,
				height: `${plot.length*30}px`,
				background: "green",
				margin: "5px"
			}}>{plot.name}<br></br>{plot.sun}</p>
		</div>
	)
}
export default Plot