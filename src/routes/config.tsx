import { BrowserRouter, Route, Switch } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";

const PublicRouter = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={(props) => <Component {...props} />} />
);

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {publicRoutes.map((value, key) => {
          return (
            <PublicRouter
              key={key}
              path={value.path}
              exact={value.exact}
              component={value.component}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};
