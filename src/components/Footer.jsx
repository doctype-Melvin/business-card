import React from "react";
import github from '../assets/github.png'

function Footer(){
    return (
        <div className="footer">
            <a target='_blank' href="https://www.github.com/doctype-Melvin">
                <img className="git" src={github}>
                </img>
            </a>
        </div>
    )
}

export default Footer