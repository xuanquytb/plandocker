import { lazy } from "react";

const PagesRoutes = [
  {
    path: "/login",
    component: lazy(() => import("../../views/pages/authentication/Login")),
    layout: "BlankLayout",
    meta: {
      authRoute: true,
    },
  },
  {
    path: "/pages/faq",
    component: lazy(() => import("../../views/pages/faq")),
  },

  {
    path: "/pages/account-settings",
    component: lazy(() => import("../../views/pages/account-settings")),
  },
  {
    path: "/pages/blog/list",
    exact: true,
    component: lazy(() => import("../../views/pages/blog/list")),
  },
  {
    path: "/pages/blog/edit/:id",
    exact: true,
    component: lazy(() => import("../../views/pages/blog/edit")),
    meta: {
      navLink: "/pages/blog/edit",
    },
  },
  {
    path: "/misc/coming-soon",
    component: lazy(() => import("../../views/pages/misc/ComingSoon")),
    layout: "BlankLayout",
    meta: {
      publicRoute: true,
    },
  },
];

export default PagesRoutes;
