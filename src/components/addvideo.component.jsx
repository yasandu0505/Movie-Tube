import { useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

const Addvideo = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Action");
  const [videourl, setUrl] = useState("");

  const { loggedIn } = useParams();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loggedIn);
    if (loggedIn === 'true') {
      const videoData = { title, category, videourl };

      fetch("http://localhost:8000/movies", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(videoData),
      }).then(() => {
        setTitle("");
        setCategory("Action");
        setUrl("");
      });
    } else {
      alert('You have to log in first');
    }
  };

  return (
    <div className="container">
      <div className="text-end">
        <h2 className="lead my-3 text-center text-md-end me-2">Add Videos</h2>
      </div>
      <div className="row mt-4 justify-content-center align-items-center d-flex">
        <div className="col-8 col-lg-10 col-xl-12 loginformadd bg-dark">
          <div className="text-light mt-5">
            <h2>Add Videos</h2>
          </div>
          <div className="form mt-4">
            <form onSubmit={handleSubmit}>
              <label for="title" className="form-label lead text-light">
                Movie Title:
              </label>
              <div className="mb-4 ">
                <input
                  type="text"
                  className="custom-input"
                  id="title"
                  placeholder="movie title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <label for="category" className="form-label lead text-light">
                Category:
              </label>
              <div className="mb-4 ">
                <select
                  name="categories"
                  id="category"
                  className="categorylist"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Action">Action</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Crime">Crime</option>
                </select>
              </div>
              <label for="url" className="form-label lead text-light">
                URL:
              </label>
              <div className="mb-4">
                <input
                  type="text"
                  className="custom-input"
                  id="url"
                  placeholder="url"
                  required
                  value={videourl}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <div className="mb-4 text-center">
                <button type="submit" className="btn btn-outline-light">
                  Add Video
                </button>
              </div>
              <div className="text-center"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addvideo;
