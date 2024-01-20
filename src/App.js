import "./App.css";
import Login from "./components/login.component";
import Mainbody from "./components/mainbody.component";
import Navbar from "./components/navbar.component";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Signup from "./components/signup.component";
import Addvideo from "./components/addvideo.component";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <Router>
      <div className="App">
        <Navbar onCategoryClick={handleCategoryClick} onSearch={handleSearch} />
        <Switch>
          <Route exact path='/'>
            <Mainbody
              selectedCategory={selectedCategory}
              searchTerm={searchTerm}
            />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/addvideo/:loggedIn'>
            <Addvideo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
