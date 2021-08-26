import { ItemsList } from "../../views/ItemsList";

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