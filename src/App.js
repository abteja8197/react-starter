import React from "react";
import './App.css';
import { Link, Route } from "react-router-dom";
import Home from './components/Home';
import Category from './components/Category';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Route exact path="/" component={Home}></Route>
      <Route path="/category" component={Category}></Route>
      <Route path="/contact" component={Contact}></Route>
    </div>
  );
}

export default App;
