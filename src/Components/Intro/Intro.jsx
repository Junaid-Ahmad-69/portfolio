import React from 'react'
import "./Intro.css"
import GitHub from "../../assets/img/github.png"
import Linkedin from "../../assets/img/linkedin.png"
import Instagram from "../../assets/img/instagram.png"
import Vector1 from "../../assets/img/Vector1.png"
import Vector2 from "../../assets/img/Vector2.png"
import Boy from "../../assets/img/boy.png"
import ThumpBup from "../../assets/img/thumbup.png"
import Crown from "../../assets/img/crown.png"
import Emoji from "../../assets/img/glassesimoji.png"
import FloatingCard from "../Floating/FloatingCard";

const Intro = () => {
    return (
        <div className="intro-wrapper">
            <div className="intro-left">
                <div className="intro-title">
                    <span>Hy! I AM</span>
                    <span>Junaid Ahmad</span>
                    <span>Frontend Developer
                        with high level of
                        experience in web designing
                        and development,<br/> producting the Quality work
                    </span>
                </div>
                <button className="primary-button intro-button">Hire me</button>
                <div className="intro-icons">
                    <a href="www.github.com/Junaid-Ahmad-69">
                        <img src={GitHub} alt="gitHub"/>
                    </a>
                    <a href="www.linkedin.com/junaid-ahmad-sandhu">
                        <img src={Linkedin} alt="linkedin"/>
                    </a>
                    <a href="www.instagram.com/sandhujunaidahmad">
                        <img src={Instagram} alt="instagram"/>
                    </a>
                </div>
            </div>
            <div className="intro-right">
                <img src={Vector1} alt="vector1"/>
                <img src={Vector2} alt="vector2"/>
                <img src={Boy} alt="boy"/>
                <img src={Emoji} alt="glasses-emoji"/>
                <div className="wrapper-crown">
                    <FloatingCard image={Crown} textHeading="Web" textDescription="Developer"/>
                </div>
                <div className="wrapper-award">
                    <FloatingCard image={ThumpBup} alt="thumb" textHeading="Best Design" textDescription="Award"/>
                </div>
                <div className="intro-overlay"></div>
                <div className="intro-overlay" style={{background:'#c1f5ff',
                top: '17rem',
                width:"21rem",
                height:"11rem",
                left:'-9rem'}}></div>
            </div>
        </div>
    )
}
export default Intro
