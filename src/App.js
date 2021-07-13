import React from "react";
import { Route } from "react-router";

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {ROUTES.map((route, key) => (
        <Route key={key} {...route} />
      ))}
    </React.Suspense>
  );
}

export default App;

const ROUTES = [
  { path: "/", component: React.lazy(() => import("./pages/home/Home")) },
  // { path: "/", component: React.lazy(() => import("./home/Home")) }
];
