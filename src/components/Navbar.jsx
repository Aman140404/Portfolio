import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="first">
            <div>
                <a href="/">
                    <img draggable="false" className="logo" alt="amanlogo" src="Assets\logo.jpg" />
                </a>
            </div>
            <div className="second">
                <a className="tags nav_link" href="/" >Home</a>
                {/* <a className="tags" href="about" >About</a> */}
                <a className="tags nav_link" href="/about" > About</a>
                <a className="tags nav_link" target="_top" href="Assets\resume.pdf" >Resume</a>
                <a className="tags nav_link" href="contact" >Contact</a>
                <div className="third">
                    <a href="https://github.com/Aman140404">
                        <img draggable="false" className="logos" alt="github" src="Assets\git.png" />
                    </a>
                    <a href="https://www.instagram.com/not.aman14?igsh=MXdmOXozdzN1czcwOA==">
                        <img draggable="false" className="logos" alt="instagram" src="Assets\insta.png" />
                    </a>
                    <a href="https://www.linkedin.com/in/aman-gupta-743107302">
                        <img draggable="false" className="logos" alt="linkedin" src="Assets\Linkedin.png" />
                    </a>
                </div>
            </div>


        </div>
    );

}

export default Navbar;