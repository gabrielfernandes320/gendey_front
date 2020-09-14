import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import appInfo from "./app-info";
import routes from "./app-routes";
import { SideNavOuterToolbar as SideNavBarLayout } from "./layouts";
import { Footer } from "./components";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import { useAuth } from "./contexts/auth";

export default function () {
  const { user } = useAuth();
  console.log(user);
  return (
    <SideNavBarLayout title={appInfo.title}>
      <Switch>
        {routes.map(({ path, component, roles }) => (
          <PrivateRoute
            exact
            key={path}
            path={path}
            user={user}
            roles={roles}
            component={component}
          />
        ))}
        <Redirect to={"/home"} />
      </Switch>
      <Footer>
        Copyright © 2011-{new Date().getFullYear()} {appInfo.title} Inc.
        <br />
        All trademarks or registered trademarks are property of their respective
        owners.
      </Footer>
    </SideNavBarLayout>
  );
}
