import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Right from "./components/Rightcontent";
import Dbtn from "./components/Dbtn";
import EmailForm from "./components/Contacts";
import About from "./components/About";
import Error from "./components/Error";

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