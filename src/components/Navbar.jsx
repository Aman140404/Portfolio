import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="first">
            <div>
                <a href="/">
                    <img draggable="false" className="logo" alt="amanlogo" src="/logo.jpg" />
                </a>
            </div>
            <div className="second">
                <Link className="tags nav_link" to={'/'} >Home</Link>
                {/* <a className="tags" href="about" >About</a> */}
                <Link to={'/about'} className="tags nav_link"  > About</Link>
                <a className="tags nav_link" href="/resume.pdf">Resume</a>
                <Link className="tags nav_link" to={'/contact'} >Contact</Link>
                <div className="third">
                    <a href="https://github.com/Aman140404">
                        <img draggable="false" className="logos" alt="github" src="/git.png" />
                    </a>
                    <a href="https://www.instagram.com/not.aman14?igsh=MXdmOXozdzN1czcwOA==">
                        <img draggable="false" className="logos" alt="instagram" src="/insta.png" />
                    </a>
                    <a href="https://www.linkedin.com/in/aman-gupta-743107302">
                        <img draggable="false" className="logos" alt="linkedin" src="/linkedin.png" />
                    </a>
                </div>
            </div>


        </div>
    );

}

export default Navbar;