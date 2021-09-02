import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import { AddShoot } from "../../views/shoots/AddShoot"
import { DisplayShoots } from "../../views/shoots/DisplayShoots"



export const Shoots = () => {
  return(
    <Switch>
      <Route path="/shoots/addshoot">
        <AddShoot />
      </Route>

      <Route path="/shoots/displayshoots">
        <DisplayShoots />
      </Route>

    </Switch>
  )
}



export default Shoots;
