import React from "react";
// import { Route, Router } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import BusinessBankAccount from "./pages/businessBankAccount/BusinessBankAccount";

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          {ROUTES.map((route, key) => (
            <Route key={key} {...route} />
          ))}
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;

const ROUTES = [
  {
    path: "/business-banking",
    component: BusinessBankAccount,
  },
  { path: "/", component: Home },
];
