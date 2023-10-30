import { lazy } from "react";

const CMSRouter = [
  // Dashboards
  {
    path: "/cmsnews/managers/users",
    component: lazy(() => import("../../views/cmsnews/phongthuy")),
  },
  {
    path: `/cmsnews/managers/customers`,
    exact: true,
    component: lazy(() =>
      import("../../views/cmsnews/user/userPostBanExchange")
    ),
  },

  //
];

export default CMSRouter;
