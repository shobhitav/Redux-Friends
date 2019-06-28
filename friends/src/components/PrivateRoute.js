import React from "react";
import { Route, Redirect } from "react-router-dom";

// requirements:
// 1. X needs to have the same API <Route />
// 2. X it render a <Route /> and passes all props to route
// 3. X it check is user is authenticated, if they are, it renders a "component" prop. if not authenticated, it redirects to /login

const PrivateRoute = ({ component: Component, ...theRest }) => {
  return (
    <Route
      {...theRest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          console.log("redirect to login");
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
