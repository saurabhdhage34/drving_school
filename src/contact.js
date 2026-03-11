import React from 'react';

function Contact()
{
    return(
        <>
<div className="container mt-5">

<h2 className="text-center mb-5 text-warning fw-bold">
Contact Our Driving School
</h2>

<div className="row">

{/* Map Section */}
<div className="col-md-6 mb-4">

<div className="shadow rounded overflow-hidden map-box">

<iframe
title="map"
src="https://www.google.com/maps?q=pune&output=embed"
width="100%"
height="420"
style={{border:"0"}}
loading="lazy"
></iframe>

</div>

</div>


{/* Contact Form */}
<div className="col-md-6">

<div className="card shadow-lg border-0 p-4 contact-box">

<h4 className="mb-4 text-center">Send Message</h4>

<form>

<div className="mb-3">
<label className="form-label">Name</label>
<input type="text" className="form-control contact-input" placeholder="Enter Name"/>
</div>

<div className="mb-3">
<label className="form-label">Email</label>
<input type="email" className="form-control contact-input" placeholder="Enter Email"/>
</div>

<div className="mb-3">
<label className="form-label">Phone</label>
<input type="text" className="form-control contact-input" placeholder="Enter Phone"/>
</div>

<div className="mb-3">
<label className="form-label">Message</label>
<textarea className="form-control contact-input" rows="4"></textarea>
</div>

<button className="btn btn-warning w-100 send-btn">
Send Message
</button>

</form>

</div>

</div>

</div>

</div>
        </>
    )
}

export default Contact;