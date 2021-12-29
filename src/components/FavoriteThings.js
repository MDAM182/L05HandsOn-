import React from 'react';
import Things from './Things';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const FavoriteThings = ({ match }) => (
    <div>
      <h2> FavoriteThings </h2>
      <ul>
        <li>
          <Link to={`${match.url}/Porsche 993`}>Favorite Car</Link>
        </li>
        <li>
          <Link to={`${match.url}/Fight Club`}>Favorite Movie</Link>
        </li>
        <li>
          <Link to={`${match.url}/Texas BBQ`}>Favorite Food</Link>
        </li>
      </ul>
  
      <Route path={`${match.url}/:thingId`} component={Things} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select one of your Favorite Things.</h3>}
      />
    </div>
  );
   
export default FavoriteThings;