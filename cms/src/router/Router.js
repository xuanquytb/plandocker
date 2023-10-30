// ** React Imports
import { Suspense, lazy, useEffect, useState } from "react";

// ** Utils
import { useLayout } from "../Hook/useLayout.js";
import { useRouterTransition } from "../Hook/useRouterTransition.js";
import { isUserLoggedIn } from "../Unitl";

// ** Custom Components
// import Spinner from '@components/spinner/Loading-spinner' // Uncomment if your require content fallback
import LayoutWrapper from "@layouts/components/layout-wrapper";

// ** Router Components
import {
  BrowserRouter as AppRouter,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

// ** Routes & Default Routes
import { DefaultRoute, Routes } from "./routes";

// ** Layouts
import HorizontalLayout from "../layouts/HorizontalLayout";
import VerticalLayout from "../layouts/VerticalLayout";
import navigation from "../navigation/vertical";
import { callApiGetPermissionForUser } from "../api/Utils";
import { STATUS_CODE } from "../constant/status";
import { useSelector } from "react-redux";
import { Slide, toast } from "react-toastify";
import { formatObjectToArrayStr } from "utility/Utils";
import {
  convertGroupPermissionsToAuthorizedForRole,
  displayNavForPermissions,
} from "../@core/layouts/utils";
import {
  GET_ALL_ROUTE_BY_ADMIN,
  subPermissions,
  subPermissionsByAdmin,
} from "constant/authorized";

const FinalRoute = (props) => {
  const history = useHistory();

  const { functions, role, finish } = props;

  /**
   ** Final Route Component Checks for Login & User Role and then redirects to the route
   */
  const parseJwt = (token) => {
    try {
      return JSON.parse(Buffer.from(token.split(".")[1], "base64"));
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const getTokenFromSS = sessionStorage.getItem("access_token");
      if (getTokenFromSS !== null) {
        const decodedJwt = parseJwt(getTokenFromSS);
        if (decodedJwt.exp * 1000 < Date.now()) {
          toast.success("Phiên đăng nhập hết hạn.", {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 2000,
          });
          sessionStorage.clear();
          history.push("/login");
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const route = props.route;

  if (
    (!isUserLoggedIn() && route.meta === undefined) ||
    (!isUserLoggedIn() &&
      route.meta &&
      !route.meta.authRoute &&
      !route.meta.publicRoute)
  ) {
    /**
     ** If user is not Logged in & route meta is undefined
     ** OR
     ** If user is not Logged in & route.meta.authRoute, !route.meta.publicRoute are undefined
     ** Then redirect user to login
     */

    return <Redirect to="/login" />;
  } else if (route.meta && route.meta.authRoute && isUserLoggedIn()) {
    // ** If route has meta and authRole and user is Logged in then redirect user to home page (DefaultRoute)
    return <Redirect to="/" />;
  } else if (
    isUserLoggedIn() &&
    props.pathsNotAllow.length &&
    props.pathsNotAllow.includes(route.path)
  ) {
    // ** If user is Logged in and doesn't have ability to visit the page redirect the user to Not Authorized
    return <Redirect to="/misc/not-authorized" />;
  }

  // ** If none of the above render component
  if (route.path === "/login" && !role) return <route.component {...props} />;

  if (role === "admin") {
    return (
      finish &&
      role && (
        <route.component
          {...props}
          functions={subPermissionsByAdmin(subPermissions) || {}}
        />
      )
    );
  }

  return (
    finish &&
    role && (
      <route.component
        {...props}
        functions={functions[route.path] ? functions[route.path] : {}}
      />
    )
  );
};

const Router = () => {
  // ** Hooks
  const [layout, setLayout] = useLayout();
  const [transition, setTransition] = useRouterTransition();
  const [pathsNotAllow, setPathsNotAllow] = useState([]);
  const [featureForRole, setFeatureForRole] = useState({});
  const [finish, setFinish] = useState(false);

  const role = useSelector((state) => state?.auth?.userData?.role);

  useEffect(() => {
    implementPermissionForUser();
  }, [role]);

  const implementPermissionForUser = async () => {
    try {
      if (role) {
        const data = await getPermissionForUsers();

        let defaultRouteId = formatObjectToArrayStr({
          ...DEFINITION_ROUTE_ID_OF_DASHBOARD,
        });

        if (role === "admin") defaultRouteId = GET_ALL_ROUTE_BY_ADMIN;

        const foundAuthorizedOfRole =
          convertGroupPermissionsToAuthorizedForRole(data, defaultRouteId);
        if (foundAuthorizedOfRole) {
          const routeIdsAllow = foundAuthorizedOfRole.authorizedRouteId;
          const features = foundAuthorizedOfRole.featuresPermission;

          const { pathsNotAllow, featureForRole } = displayNavForPermissions({
            routes: navigation,
            allowIds: routeIdsAllow,
            features,
          });

          setFeatureForRole(featureForRole);
          setPathsNotAllow(pathsNotAllow);
          setFinish(true);

          return;
        }

        setFinish(true);
      }
    } catch (e) {
      setFinish(true);
    }
  };

  const getPermissionForUsers = async () => {
    try {
      const response = await callApiGetPermissionForUser();

      if (response.code === STATUS_CODE.success) return response.data || [];
      return [];
    } catch (e) {
      return [];
    }
  };

  // ** Default Layout
  const DefaultLayout =
    layout === "horizontal" ? "HorizontalLayout" : "VerticalLayout";

  // ** All of the available layouts
  const Layouts = { BlankLayout, VerticalLayout, HorizontalLayout };

  // ** Current Active Item
  const currentActiveItem = null;

  // ** Return Filtered Array of Routes & Paths
  const LayoutRoutesAndPaths = (layout) => {
    const LayoutRoutes = [];
    const LayoutPaths = [];

    if (Routes) {
      Routes.forEach((route) => {
        // ** Checks if Route layout or Default layout matches current layout
        if (
          route.layout === layout ||
          (route.layout === undefined && DefaultLayout === layout)
        ) {
          LayoutRoutes.push(route);
          LayoutPaths.push(route.path);
        }
      });
    }

    return { LayoutRoutes, LayoutPaths };
  };

  const NotAuthorized = lazy(() =>
    import("@src/views/pages/misc/NotAuthorized")
  );

  // ** Init Error Component
  const Error = lazy(() => import("@src/views/pages/misc/Error"));

  // ** Return Route to Render
  const ResolveRoutes = () => {
    return Object.keys(Layouts).map((layout, index) => {
      // ** Convert Layout parameter to Layout Component
      // ? Note: make sure to keep layout and component name equal

      const LayoutTag = Layouts[layout];

      // ** Get Routes and Paths of the Layout
      const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout);

      // ** We have freedom to display different layout for different route
      // ** We have made LayoutTag dynamic based on layout, we can also replace it with the only layout component,
      // ** that we want to implement like VerticalLayout or HorizontalLayout
      // ** We segregated all the routes based on the layouts and Resolved all those routes inside layouts

      // ** RouterProps to pass them to Layouts
      const routerProps = {};
      return (
        <Route path={LayoutPaths} key={index}>
          <LayoutTag
            routerProps={routerProps}
            layout={layout}
            setLayout={setLayout}
            transition={transition}
            setTransition={setTransition}
            currentActiveItem={currentActiveItem}
          >
            <Switch>
              {LayoutRoutes.map((route) => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact === true}
                    render={(props) => {
                      // ** Assign props to routerProps
                      Object.assign(routerProps, {
                        ...props,
                        meta: route.meta,
                      });

                      return (
                        <Suspense fallback={null}>
                          {/* Layout Wrapper to add classes based on route's layout, appLayout and className */}
                          <LayoutWrapper
                            layout={DefaultLayout}
                            transition={transition}
                            setTransition={setTransition}
                            /* Conditional props */
                            /*eslint-disable */
                            {...(route.appLayout
                              ? {
                                  appLayout: route.appLayout,
                                }
                              : {})}
                            {...(route.meta
                              ? {
                                  routeMeta: route.meta,
                                }
                              : {})}
                            {...(route.className
                              ? {
                                  wrapperClass: route.className,
                                }
                              : {})}
                            /*eslint-enable */
                          >
                            <FinalRoute
                              route={route}
                              pathsNotAllow={pathsNotAllow}
                              functions={featureForRole}
                              role={role}
                              finish={finish}
                              {...props}
                            />
                          </LayoutWrapper>
                        </Suspense>
                      );
                    }}
                  />
                );
              })}
            </Switch>
          </LayoutTag>
        </Route>
      );
    });
  };

  return (
    <AppRouter basename={process.env.REACT_APP_BASENAME}>
      <Switch>
        {/* If user is logged in Redirect user to DefaultRoute else to login */}
        <Route
          exact
          path="/"
          render={() => {
            return isUserLoggedIn() ? (
              <Redirect to={DefaultRoute} />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        {/* Not Auth Route */}
        <Route
          exact
          path="/misc/not-authorized"
          render={(props) => (
            <Layouts.BlankLayout>
              <NotAuthorized />
            </Layouts.BlankLayout>
          )}
        />
        {ResolveRoutes()}

        {/* NotFound Error page */}
        <Route path="*" component={Error} />
      </Switch>
    </AppRouter>
  );
};

export default Router;
