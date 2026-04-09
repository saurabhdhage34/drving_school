import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function EnrollForm() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get data from the Courses page
  const courseTitle = location.state?.title || "Driving Course";
  const coursePrice = location.state?.price || "";

  const [studentData, setStudentData] = useState({
    fullname: '',
    email: '',
    phone: '',
    startDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enrolling:", studentData, "for", courseTitle);
    alert(`Success! You have enrolled in ${courseTitle}. We will contact you soon.`);
    navigate('/'); // Go back to home after success
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white text-center py-3">
              <h4 className="mb-0">Enrollment for {courseTitle}</h4>
            </div>
            <div className="card-body p-4">
              <p className="text-center text-muted">Course Fee: <strong>{coursePrice}</strong></p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" required 
                    onChange={(e) => setStudentData({...studentData, fullname: e.target.value})} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" required 
                    onChange={(e) => setStudentData({...studentData, email: e.target.value})} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" required 
                    onChange={(e) => setStudentData({...studentData, phone: e.target.value})} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Preferred Start Date</label>
                  <input type="date" className="form-control" required 
                    onChange={(e) => setStudentData({...studentData, startDate: e.target.value})} />
                </div>
                <button type="submit" className="btn btn-success w-100 fw-bold">Confirm Enrollment</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrollForm;