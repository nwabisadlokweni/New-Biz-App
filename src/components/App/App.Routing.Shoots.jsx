import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

// import { Add } from "../../views/shoots/DisplayShoots/DisplayShoots.Add"
import { DisplayShoots } from "../../views/shoots/DisplayShoots"



export const Shoots = () => {
  return(
    <Switch>
      <Route path="/shoots/displayshoots">
        <DisplayShoots />
      </Route>

    </Switch>
  )
}



export default Shoots;
