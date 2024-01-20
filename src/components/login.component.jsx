import { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { loggedIn } = useParams();

  const d = true;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8001/users");
        const data = await response.json();
        setLoginData(data);
        setLoading(false);
        console.log("Fetched data:", data);
      } catch (err) {
        setError(err);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Watch for changes in loginData
  useEffect(() => {
    if (loginData) {
      console.log("Users array:", loginData);
      // You can add any additional logic here if needed
    }
  }, [loginData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) {
      console.log("Data is still loading. Please wait.");
      return;
    }

    // Check if loginData is available
    if (loginData) {
      // Find the user with the matching username
      const user = loginData.find((user) => user.username === username);

      if (user && user.password === password) {
        console.log("Login successful!");
        history.push(`/addvideo/${d}`);
        // Redirect to the desired page or perform other actions on successful login
      } else {
        console.log("Invalid username or password");
        alert("Invalid username or password");
        setUsername("");
        setPassword("");
        // Handle invalid login (show error message, etc.)
      }
    } else {
      console.log("Login data not available");
      // Handle the case where loginData is not available (fetch failed, etc.)
    }
  };

  return (
    <div className="container">
      <div className="text-end">
        <h2 className="lead my-3 text-center text-md-end">
          Login to Add Videos
        </h2>
      </div>
      <div className="row mt-4 justify-content-center align-items-center d-flex">
        <div className="col-8 col-lg-10 col-xl-12 loginform bg-dark">
          <h1
            className="text-light text-end"
            style={{ marginTop: "170px", marginRight: "100px" }}
          >
            <i
              class="bi bi-camera-reels-fill me-2"
              style={{ fontSize: "80px" }}
            ></i>
          </h1>
          <p
            className="lead text-end text-light"
            style={{ marginRight: "100px" }}
          >
            Movie Tube
          </p>
          <div className="form-sidee bg-danger text-center">
            <div className="text-light mt-5">
              <h2>Log in</h2>
            </div>
            <div className="form mt-5">
              <form onSubmit={handleSubmit}>
                <label for="username" className="form-label lead text-light">
                  Username:
                </label>
                <div className="mb-4 ">
                  <input
                    type="text"
                    className="custom-input"
                    id="username"
                    placeholder="UserName"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <label for="password" className="form-label lead text-light">
                  Password:
                </label>
                <div className="mb-4">
                  <input
                    type="password"
                    className="custom-input"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-4 text-center">
                  <button type="submit" className="btn btn-outline-light">
                    Login
                  </button>
                </div>
                <div className="text-center">
                  <p className="text-light" style={{ fontSize: "13px" }}>
                    Don't you have an account ?{" "}
                    <Link to="/signup" className="text-light">
                      sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
