import React from 'react';
import { render } from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import Things from './components/Things';
import FavoriteThings from './components/FavoriteThings';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const App = () => {
  return (
  
  <Router>
  <div>
  <ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/about">About</Link>
  </li>
  <li>
    <Link to="/things">Things</Link>
  </li>
  <li>
    <Link to="/favoritethings">FavoriteThings</Link>
  </li>
</ul>

<hr />
  
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/things" component={Things} />
    <Route path="/favoritethings" component={FavoriteThings} />
  </div>
</Router>
  )
}
render(<App />, document.getElementById('root'));


