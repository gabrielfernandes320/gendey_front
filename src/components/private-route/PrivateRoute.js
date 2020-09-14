import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
  roles,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      console.log(roles);
      console.log(user.Role?.Name);
      const currentUser = user;
      if (!currentUser) {
        // not logged in so redirect to login page with the return url
        return <Redirect to={"/home"} />;
      }

      // check if route is restricted by role
      if (roles && roles.indexOf(currentUser.Role?.Name) === -1) {
        // role not authorised so redirect to home page
        return <Redirect to={{ pathname: "/home" }} />;
      }

      // authorised so return component
      return <Component {...props} />;
    }}
  />
);
