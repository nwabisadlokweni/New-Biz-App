import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { context as authContext } from "../../hooks/useAuth";

import { Demos } from "./App.Demos";
import { Auth } from "./App.Routing.Auth";
import { Create } from "./App.Routing.Create";

import { LandingPage } from "../../views/general/LandingPage";

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
      <Route path="/items">{user ? <Sync /> : <Redirect to="/" />}</Route>


      <Route path="/auth">
        {user ? <Redirect to="/sync/check" /> : <Auth />}
      </Route>

      <Route path="/create">
        {user ? <Redirect to="/sync/check" /> : <Create />}
      </Route>

      <Route path="/">
        {user ? <Redirect to="/items/list" /> : <LandingPage />}
      </Route>
    </Switch>
  );
};

export default Routing;
