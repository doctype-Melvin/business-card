import React from "react";
import mail from '../assets/email.png'
import linked from '../assets/linkedin.png'

function Contact(){
    return (
        <div className="contact">
            <div className="info">
                <h2 className="name">Melvin Speckamp</h2>
                <span className="role">Frontend Developer</span>
                <p className="site">
                    <a target='_blank' href="https://www.github.com/doctype-Melvin">github.com/doctype-Melvin</a>
                </p>
            </div>
            <div className="buttons">
                <button className="mail">
                    <a href="mailto:melvin.speckampn@gmail.com">
                        <img src={mail} className="icon"></img>Mail
                        </a>
                    </button>
                <button className="linkedin">
                    <a target='_blank' href="https://www.linkedin.com/in/melvin-speckamp-webdev/">
                        <img src={linked} className="icon"></img>LinkedIn
                        </a>
                </button>
            </div>
        </div>
    )
}

export default Contact