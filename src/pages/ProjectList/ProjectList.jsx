import projects from "../../data/projects";
import { useNavigate } from "react-router-dom";
import "./ProjectList.css";

function ProjectList() {
  const navigate = useNavigate();

  return (
    <div className="project-page">
      <div className="project-container">
        
        <div className="back-arrow" onClick={() => navigate("/")}>
          ← Back
        </div>

        <h1 className="project-title">Construction Projects</h1>

        <div className="project-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.id}>
              <h3>{p.name}</h3>
              <p>Status: {p.status}</p>
              <p>Start Date: {p.startDate}</p>
              <p>Location: {p.location}</p>
              <button
                className="dpr-btn"
                onClick={() => navigate(`/dpr/${p.id}`)}
              >
                Open DPR
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
