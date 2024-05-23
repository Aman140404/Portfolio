import React from "react";

function Image() {
    return (
        < div className="parent"  >
            <div className="abc">
                <img draggable="false" alt="aman image" src="./profile.jpg" />
            </div>
            <div className="rightdiv animate__bounce ">
                <h1 className="text">
                    Hi,I'm<br></br>
                    <c className="aman">Aman</c> Gupta<br></br>
                    a web developer<br></br>
                    from India...
                </h1>
                <p className="innertext"><pre>I build thing for the web,<br></br>
                    currentely I am focusing on building<br></br>
                    projects which are accessible and Human-Centric. </pre>
                </p>
                <div className='button' >
                    <a target="_blank" href="./assets/AMAN_GUPTA_RESUME.pdf" download="my resume">
                        <button className='dbtn'><i class="fa fa-download"></i>Resume</button>
                    </a>
                </div>
            </div>

        </div >

    );
}

export default Image;