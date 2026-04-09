import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";

import './index.css'; 
import Home from './Home.js';
import Contact from './contact.js';
import About from './About.js';

import Masterapp from './mastergallery.js';
import Masterapps from  './masterservices.js'

import Footer from "./Footer";
import Nav from './navbar';
import Courses from './Courses';
import Trainers from './Trainers';
import EnrollForm from './EnrollForm';

import AdmissionForm from './AdmissionForm.js';

import AdmissionList from "./AdmissionList";


import { HashRouter as Routers,Routes,Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

<Routers>

<Nav/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/Services" element={<Masterapps/>}/>
<Route path="/Gallary" element={<Masterapp/>}/>
<Route path="/courses" element={<Courses />} />
<Route path="/trainers" element={<Trainers />} />
<Route path="/trainers" element={<Trainers />} />

<Route path="/enroll" element={<EnrollForm />} />
<Route path="/admission" element={<AdmissionForm />} />
<Route path="/admission-list" element={<AdmissionList />} />
</Routes>

<Footer/>

</Routers>

);