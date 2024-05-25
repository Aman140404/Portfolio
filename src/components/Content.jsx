import React from "react";
import Dbtn from "./Dbtn";
import Proimage from "./proImage";
import Maincont from "./Maincontent";
import AnimatedPage from "./Animate";
function Content() {
    return (
        <AnimatedPage>
            <div className="parent">
                {
                    <Proimage />
                }
                <div className="rightdiv animate__bounce ">
                    {< Maincont />}
                    {<Dbtn />}
                </div>
            </div >
        </AnimatedPage>

    );
}

export default Content;