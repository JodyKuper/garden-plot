import React from 'react'
import { useEffect, useState } from "react";
import {useParams, Link} from "react-router-dom"
// import { View, Text } from "react-native"

 const Garden = () => {
	 const[garden, setGarden]= useState([])
	 let {id} =useParams()

	 useEffect(()=> {
		fetch(`/gardens/${id}`)
		 	.then((res) => res.json())
		    .then ((data)=> {
		
				setGarden(data)
			})
	 }, [])
	
	
   
	return (
		
		<div >
			
			<h3>your garden</h3>
			{garden.plots && garden.plots.map(
			(g) => 
			<Link to={`/plot/${g.id}`}>
			<p style={{display: "inline-block",
				width: `${g.width*20}px`,
				height: `${g.length*30}px`,
				background: "green",
				margin: "5px"
			}}>{g.name}<br></br>{g.sun}</p>
			</Link>
			)}
			<Link to="/plotform">plots</Link>
		</div>
	
	)
}
export default Garden;