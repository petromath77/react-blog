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
import Header from './components/Header/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
