import React from 'react';

// Routing
import { Route, Switch } from 'react-router-dom';

// Global styles
import 'normalize.css/normalize.css';
import './styles/vendor/vendor.scss';
import './styles/global.scss';

// Override styles / Top level styles
import './styles/override/override.scss';

// Pages and Componemnts
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Band from './pages/Band';
import Music from './pages/Music';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/bio" component={Band} />
        <Route path="/music" component={Music} />
      </Switch>
    </>
  );
}

export default App;
