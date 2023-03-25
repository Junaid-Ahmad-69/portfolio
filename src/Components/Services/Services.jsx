import React from 'react'
import "./Services.css"
import Humble from "../../assets/img/humble.png"
import Glasses from "../../assets/img/glasses.png"
import Heart from "../../assets/img/heartemoji.png"
import {Card} from "../Card/Card";

export const Services = () => {
    return (
        <div className="services-wrapper">
            <div className="services-awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum is simple dummy text of printing the content <br/>
                and lorem ipsum doe elite printing.
                </span>
                <button className="primary-button service-button">Download CV</button>
                <div className="intro-overlay service-blur" style={{background: '#ABF1FF94'}}></div>
            </div>
            <div className="services-card">
                <div style={{left: "30rem"}}>
                    <Card emoji={Heart} heading={'Design'}
                          detail={"Figma, Sketch , Photoshop, Adobe, Adobe xd"}/>
                </div>

                <div style={{left: "4rem", top: "12rem"}}>
                    <Card emoji={Glasses} heading={'Developer'}
                          detail={"React Js, Reducer, Content API, Html, Css, JavaScript"}/>
                </div>

                <div style={{left: "30rem", top: "30rem"}}>
                    <Card emoji={Humble} heading={'UI/UX'}
                          detail={"Lorem ipsum dummy text are usually use in section where we need random text"}/>
                </div>

                <div className="intro-overlay card-blur" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}
