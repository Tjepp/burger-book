import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Review, Resturants, WriteReview } from "../src/pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/review/:id" component={Review} />
        <Route path="/resturants" component={Resturants} />
        <Route path="/writeReview" component={WriteReview} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
