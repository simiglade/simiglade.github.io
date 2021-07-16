import React from "react";
// import { Route, Router } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import BusinesBankAccount from "./pages/businesBankAccount/businesBankAccount";
import ScrollToTop from "utils/ScrollToTop";
import GladePOS from "./pages/gladePOS/GladePOS";
import GladePay from "./pages/gladePay/GladePay";
import GladeSMELoans from "./pages/gladeSMELoans/GladeSMELoans";
import GladeStore from "./pages/gladeStore/GladeStore";
import Freelancers from "./pages/freelancers/Freelancers";
import GrowingBusinesses from "./pages/growingBusinesses/GrowingBusinesses";

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <ScrollToTop>
          <Switch>
            {ROUTES.map((route, key) => (
              <Route key={key} {...route} />
            ))}
          </Switch>
        </ScrollToTop>
      </Router>
    </React.Suspense>
  );
}

export default App;

const ROUTES = [
  {
    path: "/business-banking",
    component: BusinesBankAccount,
  },

  {
    path: "/glade-pos",
    component: GladePOS,
  },
  {
    path: "/glade-pay",
    component: GladePay,
  },
  {
    path: "/glade-sme-loans",
    component: GladeSMELoans,
  },
  {
    path: "/glade-store",
    component: GladeStore,
  },

  {
    path: "/freelancers",
    component: Freelancers,
  },

  {
    path: "/small-business",
    component: GrowingBusinesses,
  },
  { path: "/", component: Home },
];
