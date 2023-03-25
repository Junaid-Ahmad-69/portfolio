import React from 'react';
import "./FloatingCard.css";
function FloatingCard({image, textHeading, textDescription}) {
    return (
        <div className="floating-container">
            <img src={image} alt="crown-card"/>
            <span>
                {textHeading}
                <br/>
                {textDescription}
            </span>
        </div>
    )
}

export default FloatingCard
