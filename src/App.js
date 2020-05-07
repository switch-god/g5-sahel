import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'primereact/resources/themes/nova-light/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import 'video-react/dist/video-react.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


/* =================== APP COMPONENTS =================== */ 
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound';

import Header from './app/navigation/Header';
import Footer from './app/navigation/Footer';

/* $$$$$$$$$$$$$$$$$$$ PAGES $$$$$$$$$$$$$$$$$$$ */ 
   
   import Home from './app/home/Home';
   import Presentation from './app/presentation/Presentation';
   import Actualites from './app/actualites/Actualites';
   import Events from './app/events/Events';
   import Contact from './app/contact/Contact';
   import NosActivites from './app/activites/NosActivites';
   import Documentation from './app/documentation/Documentation';
   import Recrutement from './app/recrutement/Recrutement';
   import AppelOffre from './app/appeloffre/AppelOffre';

   import SoloPage from './app/solo-pages/SoloPage';
   import SeeMore from './app/solo-pages/SeeMore';
   import SoloEvent from './app/solo-pages/SoloEvent';
   
/* $$$$$$$$$$$$$$$$$$$ ./PAGES $$$$$$$$$$$$$$$$$$$ */ 


/* =================== ./APP COMPONENTS =================== */ 
export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading : true,
    };

  }
  

  render() {
    

    return (
        <Router>
            <ScrollToTop />
            {/* NAVBAR */}
              <Header />
            {/* ./NAVBAR */}
            <Redirect from="/" to="accueil" />
            {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL.*/}
            <Switch>
              
             

              <Route exact path="/accueil">
                <Home />
              </Route>
              
              <Route exact path="/presentation">
                <Presentation />
              </Route>

              <Route exact path="/actualites">
                <Actualites />
              </Route>

              <Route exact path="/events">
                <Events />
              </Route>

              <Route path="/nos-activites">
                <NosActivites />
              </Route>
              
              <Route exact path="/contact-g5">
                <Contact />
              </Route>
            
              <Route path="/documentation">
                <Documentation />
              </Route>
              
              <Route path="/appel-offre">
                <AppelOffre />
              </Route>


              <Route exact path="/recrutement">
                <Recrutement />
              </Route>

              <Route path="/:slug" component={SoloPage} />
              <Route path="/see-more/:category" component={SeeMore} />
              <Route path="/solo-event/:slug" component={SoloEvent} />
              
              {/* <Route component={NotFound}/> */}
            </Switch>

            {/* FOOTER */}
              <Footer />
            {/* ./FOOTER */}
          
        </Router>
    );
  }

}

export default App;
