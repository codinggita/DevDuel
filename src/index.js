import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPg from "./Landingpage"; 
import Export from "./Explore"; 
import Form from "./Form"; 
import Back from "./Landingpage"; 
import  Page404 from "./Page404";  

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPg />} />
      <Route path="/export" element={<Export />} />
      <Route path="/form" element={<Form />} />
      <Route path="/back" element={<Back />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
