import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Right from "./Rightcontent";
import Dbtn from "./Dbtn";
import EmailForm from "./Contacts";
import About from "./About";
import Error from "./Error";

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
function App() {
  return (

    <div className="main">

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={< Navbar />} /> */}
          <Route path="/" element={< Content />} />
          <Route path="/about" element={< About />} />
          <Route path="/contact" element={< EmailForm />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{/* < Content /> */ }
// <EmailForm />