import React from 'react';

function Trainers() {
  const trainers = [
    { id: 1, name: "Rahul Sharma", exp: "10 Years", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a" },
    { id: 2, name: "Sanket Mane", exp: "8 Years", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" }
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Meet Our Expert Trainers</h1>
      <div className="row justify-content-center">
        {trainers.map(trainer => (
          <div className="col-md-4 mb-4" key={trainer.id}>
            <div className="card border-0 text-center">
              <img src={trainer.img} className="rounded-circle mx-auto d-block mt-3" alt={trainer.name} style={{width: "150px", height: "150px", objectFit: "cover"}} />
              <div className="card-body">
                <h5 className="card-title">{trainer.name}</h5>
                <p className="text-warning fw-bold">{trainer.exp} Experience</p>
                <p>Specialist in Manual & Automatic cars.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trainers;