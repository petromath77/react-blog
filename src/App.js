import React, { useEffect } from 'react';

// Routing
import { Route, Switch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn } from './actions/user';

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
import Signup from './pages/Signup';
import Band from './pages/Band';
import Music from './pages/Music';
import Profile from './pages/Profile';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  useEffect(() => {
    dispatch(setIsLoggedIn(localStorage.getItem('isLoggedIn')));
  });
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/bio" component={Band} />
        <Route path="/music" component={Music} />
        <Route path="/signup"
          component={() => {
            if (isLoggedIn) {
              return <Profile/>;
            }

            return <Signup isLoggedIn={isLoggedIn} />;
          }} />
        <Route path="/profile"
          component={() => {
            if (isLoggedIn) {
              return <Profile/>;
            }

            return <Signup isLoggedIn={isLoggedIn} />;
          }} />
        <Route path="/logout"
          component={() => {
            if (!isLoggedIn) {
              return <Home/>;
            }

            return <Home/>;
          }} />
      </Switch>
    </>
  );
}

export default App;
