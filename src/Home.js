import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>

<div id="demo" className="carousel slide" data-bs-ride="carousel">

  {/* Indicators */}
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

  {/* Carousel */}
  <div className="carousel-inner">

    {/* Slide 1 */}
    <div className="carousel-item active">
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
        className="d-block w-100"
        alt="car"
        style={{height:"500px", objectFit:"cover"}}
      />

      <div className="carousel-caption">
        <h1>Welcome To Driving School</h1>
        <p>Learn driving with professional trainers</p>
        <Link to="/about" className="btn btn-warning">Start Learning</Link>
      </div>
    </div>

    {/* Slide 2 */}
    <div className="carousel-item">
      <img
        src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d"
        className="d-block w-100"
        alt="car"
        style={{height:"500px", objectFit:"cover"}}
      />

      <div className="carousel-caption">
        <h1>Professional Trainers</h1>
        <p>Expert instructors to guide you safely</p>
        <Link to="/trainers" className="btn btn-warning">Our Trainers</Link>
      </div>
    </div>

    {/* Slide 3 */}
    <div className="carousel-item">
      <img
        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
        className="d-block w-100"
        alt="car"
        style={{height:"500px", objectFit:"cover"}}
      />

      <div className="carousel-caption">
        <h1>Affordable Driving Courses</h1>
        <p>Start your driving journey today</p>
        <Link to="/courses" className="btn btn-warning">View Courses</Link>
      </div>
    </div>

  </div>

  {/* Controls */}
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>

  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>

</div>

    </>
  );
}

export default Home;