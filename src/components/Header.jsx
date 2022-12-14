import React from "react";
import pic from '../assets/small\ guy.jpg'

function Header(){
    return (
        <div>
            <img className="pic" src={pic}></img>
        </div>
    )
}

export default Header