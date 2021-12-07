import React from "react";

 const PlotView = ({plot, plants}) => {
     console.log(plants)
    return <>
        <p style={{
            display: "inline-block",
            width: `${plot.width * 20}px`,
            height: `${plot.length * 30}px`,
            background: "#80461b",
            margin: "5px"
        }}>{plot.name}
            <br/>
            {plot.sun}
            <br/>

            {/* {plot && plot.map(p=>
            <h4>{plot.plant}</h4>)} */}
            {
               plants && plants.map(plant => !plant.name ? <p></p>: 
                     <h4>{plant.name}</h4>
                )
            }
        </p>
    </>
}
export default PlotView