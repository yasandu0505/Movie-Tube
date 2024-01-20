import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar({ onCategoryClick, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <div className="navbar navbar-expand-md navbar-light whotto">
      <div className="container-xxl my-2">
        <Link
          to="/"
          className="navbar-brand"
          onClick={() => onCategoryClick("All")}
        >
          <span className="fw-bold text-dark">
            <i class="bi bi-camera-reels-fill me-2"></i>
            Movie Tube
          </span>
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-start align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                href="#action"
                className="nav-link text-dark"
                onClick={() => onCategoryClick("Action")}
              >
                ACTION
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#thriller"
                className="nav-link text-dark"
                onClick={() => onCategoryClick("Thriller")}
              >
                THRILLER
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#crime"
                className="nav-link text-dark"
                onClick={() => onCategoryClick("Crime")}
              >
                CRIME
              </a>
            </li>
            <form className="form-inline my-2 my-lg-0 ms-3">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </form>
          </ul>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-link text-dark"
              >
                LOG IN
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signup"
                className="nav-link text-dark"
              >
                SIGN UP
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
