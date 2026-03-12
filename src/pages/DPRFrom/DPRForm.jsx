import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import projects from "../../data/projects";
import "./DPRForm.css";

function DPRForm() {
  const navigate = useNavigate();

  const [selectedProject, setSelectedProject] = useState("");
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const [work, setWork] = useState("");
  const [workers, setWorkers] = useState("");
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");

  
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 3); 
    const previews = files.map((file) => URL.createObjectURL(file));
    setImages(previews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (!selectedProject) {
      setMessage("Please select a project");
      return;
    }
    if (!date || !weather || !work || !workers) {
      setMessage("Please fill all fields");
      return;
    }

    setMessage(""); 

    
    toast.success("✅ DPR Submitted Successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });

  
    setSelectedProject("");
    setDate("");
    setWeather("");
    setWork("");
    setWorkers("");
    setImages([]);
  };

  return (
    <div className="form-container">
      
      <div className="fixed-back-arrow" onClick={() => navigate("/projects")}>
        ← Back
      </div>

      <div className="form-box">
        <h2>DPR Form</h2>

        <form onSubmit={handleSubmit}>
         
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            required
          >
            <option value="">Select Project</option>
            {projects.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>

         
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
            min={1}
          />

          
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />

          <div className="image-preview">
            {images.map((img, index) => (
              <img key={index} src={img} alt={`preview-${index}`} />
            ))}
          </div>

  
          <button type="submit">Submit DPR</button>

          
          {message && <p className="message">{message}</p>}
        </form>
      </div>

      
      <ToastContainer />
    </div>
  );
}

export default DPRForm;
