import React, { useState } from 'react';

function About() {
  // State to track if "Learn More" is clicked
  const [showExtra, setShowExtra] = useState(false);

  return (
    <>
      <div className="container mt-5">
        {/* TOP ROW: Main Image and Info */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
              alt="Driving School"
              className="img-fluid rounded shadow"
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
              driving easily and safely.
            </p>

            {/* Button toggles the 'showExtra' state */}
            <button 
              className="btn btn-primary" 
              onClick={() => setShowExtra(!showExtra)}
            >
              {showExtra ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>

        {/* BOTTOM ROW: Shows only after clicking button */}
        {showExtra && (
          <div className="row mt-5 animate__animated animate__fadeIn">
            <hr />
            <h2 className="text-center mb-4">Our Training Facilities</h2>
            
            {/* Image 1 and Info */}
            <div className="col-md-6 mb-4">
              <div className="card border-0">
                <img 
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d" 
                  className="card-img-top rounded" 
                  alt="Training" 
                />
                <div className="card-body px-0">
                  <h4>Practical Lessons</h4>
                  <p>Get hands-on experience in real traffic conditions with our dual-control cars.</p>
                </div>
              </div>
            </div>

            {/* Image 2 and Info */}
            <div className="col-md-6 mb-4">
              <div className="card border-0">
                <img 
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537" 
                  className="card-img-top rounded" 
                  alt="Classroom" 
                />
                <div className="card-body px-0">
                  <h4>Theory Classes</h4>
                  <p>We provide detailed theory sessions to help you pass your driving test on the first try.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default About;
