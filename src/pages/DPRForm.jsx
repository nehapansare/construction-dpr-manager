import { useParams } from "react-router-dom";
import { useState } from "react";
import projects from "../data/projects";
import "./DPRForm.css";

function DPRForm() {
  const { id } = useParams();

  const project = projects.find((p) => p.id == id);

  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const [work, setWork] = useState("");
  const [workers, setWorkers] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("DPR Submitted Successfully");
  };

  if (!project) {
    return <h2 style={{ textAlign: "center", marginTop: "40px", color:"#fff" }}>Project Not Found</h2>;
  }

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>DPR Form</h2>
        <h3>{project.name}</h3>
        <p>Location: {project.location}</p>
        <p>Status: {project.status}</p>

        <form onSubmit={handleSubmit}>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <select
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
            required
          >
            <option value="">Select Weather</option>
            <option>Sunny</option>
            <option>Cloudy</option>
            <option>Rainy</option>
          </select>

          <textarea
            placeholder="Work Description"
            value={work}
            onChange={(e) => setWork(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Worker Count"
            value={workers}
            onChange={(e) => setWorkers(e.target.value)}
            required
          />

          <input type="file" multiple />

          <button type="submit">Submit DPR</button>
        </form>
      </div>
    </div>
  );
}

export default DPRForm;
