import React from 'react';
import ReactDOM from 'react-dom/client';

function Services()
{
    return(
        <>
           <div className="container mt-5">

      <h2 className="text-center mb-5">Our Driving Services</h2>

      <div className="row">

        {/* Service 1 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/743/743131.png"
              alt="Driving Lesson"
              width="80"
              className="mx-auto"
            />
            <div className="card-body">
              <h4>Beginner Driving</h4>
              <p>
                Learn basic driving skills with our professional trainers.
              </p>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/854/854894.png"
              alt="Car Training"
              width="80"
              className="mx-auto"
            />
            <div className="card-body">
              <h4>Advanced Driving</h4>
              <p>
                Improve your driving confidence with advanced training.
              </p>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
              alt="Driving Test"
              width="80"
              className="mx-auto"
            />
            <div className="card-body">
              <h4>License Test</h4>
              <p>
                Prepare for driving license test with expert guidance.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
        </>
    )
}

export default Services;