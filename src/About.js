import React from 'react';
import ReactDOM from 'react-dom/client';

function About()
{
    return(
        <>
           <div className="container mt-5">

      <div className="row align-items-center">

        
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="Driving School"
            className="img-fluid rounded"
          />
        </div>

       
        <div className="col-md-6">
          <h1>About Our Driving School</h1>

          <p>
            Our driving school provides professional driving lessons for beginners
            and experienced drivers. We focus on safe driving techniques,
            road rules, and confidence building.
          </p>

          <p>
            Our expert trainers guide students step by step so they can learn
            driving easily and safely. We provide modern vehicles and
            flexible training schedules.
          </p>

          <button className="btn btn-primary">
            Learn More
          </button>

        </div>

      </div>

    </div>
        </>
    )
}

export default About;