import React from 'react';

function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "Personal MERN portfolio with Bootstrap.", link: "#" },
    { title: "Todo App", desc: "CRUD Todo app using React & MongoDB.", link: "#" },
    { title: "Weather App", desc: "Weather app using OpenWeather API.", link: "#" }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projects.map((p, i) => (
          <div key={i} className="col-md-4 mb-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{p.title}</h5>
                <p className="card-text">{p.desc}</p>
                <a href={p.link} className="btn btn-outline-primary">View</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;