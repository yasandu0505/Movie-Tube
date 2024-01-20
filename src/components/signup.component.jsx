import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password, email };

    fetch("http://localhost:8001/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userData),
    }).then(() => {
      setEmail("");
      setPassword("");
      setUsername("");
      alert('Account Created Succesfully !');
      history.push("/login");
    });
  };

  return (
    <div className="container">
      <div className="text-end">
        <h2 className="lead my-3 text-center text-md-end">
          Sign up to Perform Actions
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
            <div className="text-light mt-4">
              <h2>Sign up</h2>
            </div>
            <div className="form mt-2">
              <form onSubmit={handleSubmit}>
                <label for="email" className="form-label lead text-light">
                  E mail:
                </label>
                <div className="mb-4 ">
                  <input
                    type="email"
                    className="custom-input"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
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
                    Submit
                  </button>
                </div>
                <div className="text-center">
                  <p className="text-light" style={{ fontSize: "13px" }}>
                    Have an account ?{" "}
                    <Link to="/login" className="text-light">
                      log in
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

export default Signup;
