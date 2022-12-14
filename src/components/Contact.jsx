import React from "react";

function Contact(){
    return (
        <div>
            <h2 className="name">Melvin Speckamp</h2>
            <span className="role">Frontend Developer</span>
            <p className="site">
                <a href="https://www.github.com/doctype-Melvin">github.com/doctype-Melvin</a>
            </p>
            <div className="buttons">
                <button>
                    <a href="mailto:melvin.speckampn@gmail.com">Email</a>
                    </button>
                <button>
                    <a href="https://www.linkedin.com/in/melvin-speckamp-webdev/">LinkedIn</a>
                </button>
            </div>
        </div>
    )
}

export default Contact