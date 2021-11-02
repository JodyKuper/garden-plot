import React from 'react'
import { useEffect, useState } from "react";
import {useParams, Link, Redirect} from "react-router-dom";
import PlotView from "./PlotView"
 
const Garden = ({user, plants}) => {
	 const[garden, setGarden]= useState({})
	 let {id} =useParams()

	 useEffect(()=> {
		fetch(`/gardens/${id}`)
		 	.then((res) => res.json())
		    .then ((data)=> {
				setGarden(data)
			})
		}, [id])

		// if (!user || !user.garden || user.garden.id !== parseInt(id)) {
		// 	return <Redirect to={'/login'}/>;
		// }
	
		return (
		
			<div >		
			<Link to="/plotform">make a plot</Link>
			<h3></h3>
			{garden.plots && garden.plots.map((plot) =>
				<Link key={`plot-${plot.id}`} to={`/plot/${plot.id}`}>
					<PlotView plot={plot} />
				</Link>
			)}
		</div>
	)
}
export default Garden;