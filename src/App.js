import React from "react";
// import { Route, Router } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
    component: React.lazy(() =>
      import("pages/businessBankAccount/BusinessBankAccount")
    ),
  },
  { path: "/", component: React.lazy(() => import("./pages/home/Home")) },
];
