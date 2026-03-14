import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">

      <div className="container">
        <div className="row">

          {/* Logo + About */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="text-warning">DriveMaster</h3>
            <p>
              Professional driving school providing safe and confident
              driving lessons for beginners and experienced drivers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/gallery" className="text-light text-decoration-none">Gallery</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-warning">Our Services</h5>
            <ul className="list-unstyled">
              <li>Beginner Driving Lessons</li>
              <li>Advanced Driving Training</li>
              <li>License Test Preparation</li>
              <li>Road Safety Training</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-warning">Contact Us</h5>
            <p>📍 Pune, Maharashtra</p>
            <p>📞 +91 9876543210</p>
            <p>📧 drivemaster@gmail.com</p>

            

          </div>

        </div>

        <hr className="border-light"/>

        <div className="text-center">
          <p className="mb-0">
            © 2026 DriveMaster Driving School | All Rights Reserved
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;