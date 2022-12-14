import React from "react";
import github from '../assets/github-logo.png'

function Footer(){
    return (
        <div className="footer">
            <a href="https://www.github.com/doctype-Melvin">
                <img className="git" src={github}>
                </img>
            </a>
        </div>
    )
}

export default Footer