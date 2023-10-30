import DashboardRoutes from "./Dashboard";
import AppRoutes from "./Apps";
import CMSRouter from "./CMS";

// ** Document title
const TemplateTitle = "%s - CMS";

// ** Default Route
const DefaultRoute = "/dashboard/analytics";

// ** Merge Routes
const Routes = [...CMSRouter, ...DashboardRoutes, ...AppRoutes];

export { DefaultRoute, TemplateTitle, Routes };
