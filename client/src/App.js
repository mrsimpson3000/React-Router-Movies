import React, { useState } from 'react';
import { Route, Switch }

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* <div>Replace this Div with your Routes</div> */}
      <Switch>
        <Route path="/movies/:itemID" component={Movie} />
        <Route path="/" component={MovieList} />
      </Switch>
    </div>
  );
};

export default App;
