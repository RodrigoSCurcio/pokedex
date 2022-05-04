import { Home } from "../pages";

interface RouteType {
  path: string;
  component: any;
  exact: boolean;
}

interface PublicRoutesType extends Array<RouteType> {}

export const publicRoutes: PublicRoutesType = [
  {
    component: Home,
    exact: true,
    path: "/",
  },
];
