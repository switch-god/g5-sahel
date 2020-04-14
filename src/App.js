import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// FONTS :
import './assets/fonts/Poppins/Poppins-SemiBold.ttf';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


/* APP COMPONENTS */ 
import Header from './app/navigation/Header';

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
            <Header />
          {/* ./NAVBAR */}

          {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL.*/}
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/about">
              <About />
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
