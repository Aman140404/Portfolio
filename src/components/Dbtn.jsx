import React from 'react'

function Dbtn() {
    return (
        <div className='button' >
            <a href="/resume.pdf" download="my resume">
                <button className='dbtn'><i class="fa fa-download"></i>Resume</button>
            </a>
        </div>
    );
}

export default Dbtn;