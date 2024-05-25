import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <>
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
        <App />

    </>, document.getElementById("root"));

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
