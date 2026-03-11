import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'; 
import Home from './Home.js';
import Contact from './contact.js';
import About from './About.js';
import Gallary from './Gallary.js';
import Services from './Services.js';

import Footer from "./Footer";


import Nav from './navbar';


import { BrowserRouter as Routers,Routes,Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Routers>
        <Nav></Nav>
        
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={ <Contact/>}></Route>
            <Route path="/Services" element={ <Services/>}></Route>
            <Route path="/Gallary" element={ <Gallary/>}></Route>
        </Routes>

        <Footer/>
    </Routers>

    
  
);



