import { Switch, Route, Redirect } from "react-router-dom";
import { ItemsList } from "../../views/Items";

export const Items = () => {
    return (
      <Switch>
        <Route path="/items/list">
          <ItemsList />
        </Route>
      </Switch>
    );
  };
  export default Items;