import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import React from "react";

const KurtiSuit = () => {
  return (
    <div>
      <h1>Shop Kurti Suit</h1>
    </div>
  );
};

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  );
};
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/kurti-suit" component={KurtiSuit} />
      </Switch>
    </div>
  );
}

export default App;
