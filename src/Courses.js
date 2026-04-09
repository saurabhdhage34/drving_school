import React from 'react';

function Courses() {
  const courseList = [
    { id: 1, title: "Basic Course", price: "₹3000", duration: "15 Days", img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d" },
    { id: 2, title: "Advanced Course", price: "₹5000", duration: "30 Days", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d" },
    { id: 3, title: "License Special", price: "₹7000", duration: "45 Days", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537" }
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Driving Courses</h1>
      <div className="row">
        {courseList.map(course => (
          <div className="col-md-4 mb-4" key={course.id}>
            <div className="card shadow">
              <img src={course.img} className="card-img-top" alt={course.title} style={{height: "200px", objectFit: "cover"}} />
              <div className="card-body text-center">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text text-muted">Duration: {course.duration}</p>
                <h4 className="text-primary">{course.price}</h4>
                
                <button className="btn btn-warning w-100">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;