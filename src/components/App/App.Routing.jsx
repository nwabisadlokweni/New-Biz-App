import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { context as authContext } from "../../hooks/useAuth";

import { Demos } from "./App.Routing.Demo";
import { Auth } from "./App.Routing.Auth";
import { Create } from "./App.Routing.Create";
import { Sync } from "./App.Routing.Sync";
import { Items } from "./App.Routing.Items";
import { General } from "./App.Routing.General";

export const Routing = () => {
  const { loading, user } = useContext(authContext);

  if (loading) {
    return null;
  }

  return (
    <Switch>
      <Route path="/demo">
        <Demos />
      </Route>

      <Route path="/items">{user ? <Items /> : <Redirect to="/" />}</Route>

      <Route path="/sync">{user ? <Sync /> : <Redirect to="/" />}</Route>

      <Route path="/auth">
        {user ? <Redirect to="/sync/check" /> : <Auth />}
      </Route>

      <Route path="/create">
        {user ? <Redirect to="/sync/check" /> : <Create />}
      </Route>

      <General />
    </Switch>
  );
};

export default Routing;
