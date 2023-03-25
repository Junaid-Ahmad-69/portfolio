import React from 'react'
import "./Card.css"

export const Card = ({emoji, heading, detail}) => {
    return (
        <div className="card-wrapper">
            <img src={emoji} alt="emoji"/>
            <span>{heading} </span>
            <span>{detail}</span>
            <button className="card-button">Learn More</button>
        </div>
)
}
