import React from 'react';
import ReactDOM from 'react-dom/client';

function Services(props)
{
    return(
        <>
           

      <h2 className="text-center mb-5">Our Driving Services</h2>

     

        {/* Service 1 */}
        
          <div className="card shadow text-center p-3">
            <img
              src={props.src}
              alt="Driving Lesson"
              width="80"
              className="mx-auto"
            />
            <div className="card-body">
              <h4>{props.name}</h4>
              <p>
                {props.info}
              </p>
            </div>
          </div>
        

        

        

      
        </>
    )
}

export default Services;