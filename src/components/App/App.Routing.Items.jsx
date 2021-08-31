import { Switch, Route } from "react-router-dom";
import { ItemsList } from "../../views/Items/ItemsList";

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