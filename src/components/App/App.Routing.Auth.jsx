import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom"; 

import { context as authContext } from '../../hooks/useAuth';
import { LandingPage } from "../../views/general/LandingPage";
import { ResetPassword } from "../../views/auth/ResetPassword";
import { SignIn } from "../../views/auth/SignIn";
import { UserSelect } from "../../views/auth/UserSelect";
import { UserSignIn } from "../../views/auth/UserSignIn";


export const Auth = () => {
  const {  user } = useContext(authContext);
  return (
    <Switch>
      <Route path="/auth/signin">
        <SignIn />
      </Route>

      <Route path="/auth/reset">
        <ResetPassword /> 
      </Route>

      <Route path="/auth/select">
        <UserSelect />
      </Route>

      <Route path="/auth/auto">
        <UserSignIn />
      </Route>

      <Route path="/">
      {user ? <Redirect to ="/items/list" /> : <LandingPage />}
      </Route>
    </Switch>
  );
};



export default Auth;
