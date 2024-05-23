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
                    <a href="">
                        <img draggable="false" className="logos" alt="amanlogo" src="git.png" />
                    </a>
                    <a href="">
                        <img draggable="false" className="logos" alt="amanlogo" src="insta.png" />
                    </a>
                    <a href="">
                        <img draggable="false" className="logos" alt="amanlogo" src="linkedin.png" />
                    </a>
                </div>
            </div>


        </div>
    );

}

export default Navbar;