import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import SavedList from "./Movies/SavedList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    if (!savedList.includes(movie)) {
      setSavedList([...savedList, movie]);
    }
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* <div>Replace this Div with your Routes</div> */}
      <Switch>
        <Route path='/movies/:movieID'>
          <Movie addToSavedList={addToSavedList} />
        </Route>
        <Route path='/'>
          <MovieList />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
