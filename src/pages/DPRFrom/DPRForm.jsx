import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS
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

  // Handle image upload and preview
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 3); // Max 3 images
    const previews = files.map((file) => URL.createObjectURL(file));
    setImages(previews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!selectedProject) {
      setMessage("Please select a project");
      return;
    }
    if (!date || !weather || !work || !workers) {
      setMessage("Please fill all fields");
      return;
    }

    setMessage(""); // clear message

    // Show success toast instead of alert
    toast.success("✅ DPR Submitted Successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });

    // Reset form
    setSelectedProject("");
    setDate("");
    setWeather("");
    setWork("");
    setWorkers("");
    setImages([]);
  };

  return (
    <div className="form-container">
      {/* Fixed Back Arrow */}
      <div className="fixed-back-arrow" onClick={() => navigate("/projects")}>
        ← Back
      </div>

      <div className="form-box">
        <h2>DPR Form</h2>

        <form onSubmit={handleSubmit}>
          {/* Project Dropdown */}
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

          {/* Date Picker */}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          {/* Weather Dropdown */}
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

          {/* Work Description */}
          <textarea
            placeholder="Work Description"
            value={work}
            onChange={(e) => setWork(e.target.value)}
            required
          />

          {/* Worker Count */}
          <input
            type="number"
            placeholder="Worker Count"
            value={workers}
            onChange={(e) => setWorkers(e.target.value)}
            required
            min={1}
          />

          {/* Photo Upload */}
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />

          {/* Preview Thumbnails */}
          <div className="image-preview">
            {images.map((img, index) => (
              <img key={index} src={img} alt={`preview-${index}`} />
            ))}
          </div>

          {/* Submit */}
          <button type="submit">Submit DPR</button>

          {/* Error / Validation Message */}
          {message && <p className="message">{message}</p>}
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default DPRForm;
