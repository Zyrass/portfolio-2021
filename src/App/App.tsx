// Dépendances
import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Composants
import { Navbar, Footer } from '../utils';
import { Home, Story }  from '../components/pages';

function App() {
  return (
    <Fragment>
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route path="/accueil" component={ Home } />
          <Route path="/story" component={ Story } />
          <Route path="/project" render={ () => "<h1>A étiter Project</h1>" }/>
          <Redirect to="/accueil" />
        </Switch>

        <Footer />
      </div>
    </Fragment>
  );
}

export default App;