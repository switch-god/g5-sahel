import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';


/* APP COMPONENTS */ 
import Posts from './app/Posts';
import Users from './app/Users';
import About from './app/About';
import Home from './app/Home';

export class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          
          {/* NAVBAR */}
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
            </ul>
          </nav>
          {/* ./NAVBAR */}

          {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL.*/}
          <Switch>
            <Route path="/posts">
              <Posts />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          {/* FOOTER */}
          {/* ./FOOTER */}
        </div>
      </Router>
    );
  }

}

export default App;
