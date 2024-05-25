import React from 'react'

function Dbtn() {
    return (
        <div className='button' >
            <a  target="_blank" href="Assets\resume.pdf" download="my resume">
                <button className='dbtn'><i class="fa fa-download"></i>Resume</button>
            </a>
        </div>
    );
}

export default Dbtn;