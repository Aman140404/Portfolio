import React from 'react'

function About() {
    return (
        <div className='namemain'>
            <div className='aboutimg'>
                <img draggable="false" className='cdn' src='./about.jpg' />
            </div>
            <div className='abtcnt'>
                <h1 className='t1'>Hey.what's up?Hola!....👋</h1>
                <p className='myself'>I'm<b> Aman Gupta</b>  - a <u>full stack web developer</u> student who tries to blend the best of the design and functionalities into web apps.
                    <p></p> <br></br><u>Tech</u> is what I live for.
                </p>
                <p className='myself'>I am a Student at Bhilai Institute of Technology,Durg.I am Currently pursuing my B.tech degree in Computers Science.</p>
                <p className='myself'>  I am a tech enthusiast who lives in the tech realm,I try to discover new technologies and
                    new innovation in the tech industry.I like working on new technologies and love to figure out there scopes for the <u>social causes</u>  for the <u>mankind</u> .
                </p>
            </div>


        </div>
    );
}

export default About;
