import React from "react";
import Dbtn from "./Dbtn";
import Proimage from "./proImage";
import Maincont from "./Maincontent";
function Content() {
    return (
        <div className="parent">
            {
                <Proimage />
            }
            <div className="rightdiv animate__bounce ">
                {< Maincont />}
                {<Dbtn />}
            </div>

        </div >

    );
}

export default Content;