import React from "react";

function Navbar() {
    return (
        <div className="first">
            <div>
                <a href="./index.html">
                    <img draggable="false" className="logo" alt="amanlogo" src="logo.jpg" />
                </a>
            </div>
            <div className="second">
                <a className="tags" target="_blank" href="" >About</a>
                <a className="tags" href="" >Resume</a>
                <a className="tags" href="" >Contact</a>
                <div className="third">
                    <a href="https://github.com/Aman140404">
                        <img draggable="false" className="logos" alt="github" src="git.png" />
                    </a>
                    <a href="https://www.instagram.com/not.aman14?igsh=MXdmOXozdzN1czcwOA==">
                        <img draggable="false" className="logos" alt="instagram" src="insta.png" />
                    </a>
                    <a href="https://www.linkedin.com/in/aman-gupta-743107302">
                        <img draggable="false" className="logos" alt="linkedin" src="linkedin.png" />
                    </a>
                </div>
            </div>


        </div>
    );

}

export default Navbar;