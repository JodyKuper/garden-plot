import React from "react";

export const PlotView = ({plot}) => {
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
            {
                plot.plants && plot.plants.map(plant => {
                    return <h4>{plant.name}</h4>;
                })
            }
        </p>
    </>;
}
