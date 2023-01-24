import { Params, generatePath, useNavigate, matchPath } from "react-router-dom";
import { useLocation } from "react-router-dom";

export interface Route<RouteParams extends Params> {
  path: string;
  label: string;
  url: (params?: RouteParams | undefined) => string;
  go: (params?: RouteParams | undefined) => void;
}

type GoOptions = {
  keepSearchParams?: boolean;
};

export const useRouter = () => {
  const nav = useNavigate();
  const { pathname, search } = useLocation();
  const route = <RouteParams extends Params>(label: string, path: string) => {
    const routeObj = {
      path,
      label,
      url: (params?: RouteParams) => {
        try {
          return generatePath(path, params);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log(e);
          return window.location.pathname + window.location.search;
        }
      },
      go: (params?: RouteParams, options?: GoOptions) => {
        nav(
          `${routeObj.url(params)}${options?.keepSearchParams ? search : ""}`
        );
      },
    };
    return routeObj;
  };

  const routes = {
    home: route("Home", "/"),
  };

  const currentRoute = () => {
    const routesArray = Object.values(routes);
    return routesArray.find(({ path }) => matchPath(path, pathname));
  };

  return { routes, currentRoute: currentRoute() };
};
