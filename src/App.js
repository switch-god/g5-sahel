import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'video-react/dist/video-react.css';

// FONTS :
import './assets/fonts/Poppins/Poppins-SemiBold.ttf';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


/* =================== APP COMPONENTS =================== */ 
import Header from './app/navigation/Header';
import Footer from './app/navigation/Footer';

/* $$$$$$$$$$$$$$$$$$$ HOME PAGE$$$$$$$$$$$$$$$$$$$ */ 
   import Home from './app/home/Home';
  

/* $$$$$$$$$$$$$$$$$$$ ./HOME PAGE$$$$$$$$$$$$$$$$$$$ */ 



/* =================== ./APP COMPONENTS =================== */ 
export class App extends Component {
  
  render() {
    return (
      <Router>
        
          
          {/* NAVBAR */}
            <Header />
          {/* ./NAVBAR */}

          {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL.*/}
          <Switch>
            
            <Route path="/">
              <Home />
            </Route>
            
          </Switch>

          {/* FOOTER */}
            <Footer />
          {/* ./FOOTER */}
        
      </Router>
    );
  }

}

export default App;
