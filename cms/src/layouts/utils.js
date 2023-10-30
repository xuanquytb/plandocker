/**
 * Return which component to render based on it's data/context
 * @param {Object} item nav menu item
 */
export const resolveVerticalNavMenuItemComponent = (item) => {
  if (item.header) return 'VerticalNavMenuSectionHeader';
  if (item.children) return 'VerticalNavMenuGroup';
  return 'VerticalNavMenuLink';
};

/**
 * Return which component to render based on it's data/context
 * @param {Object} item nav menu item
 */
export const resolveHorizontalNavMenuItemComponent = (item) => {
  if (item.children) return 'HorizontalNavMenuGroup';
  return 'HorizontalNavMenuLink';
};

/**
 * Check if nav-link is active
 * @param {Object} link nav-link object
 */

export const isNavLinkActive = (link, currentURL, routerProps) => {
  return (
    currentURL === link ||
    (routerProps && routerProps.meta && routerProps.meta.navLink && routerProps.meta.navLink === link)
  );
};

/**
 * Check if nav group is
 * @param {Array} children Group children
 */
export const isNavGroupActive = (children, currentURL, routerProps) => {
  return children.some((child) => {
    // If child have children => It's group => Go deeper(recursive)
    if (child.children) {
      return isNavGroupActive(child.children, currentURL, routerProps);
    }
    // else it's link => Check for matched Route
    return isNavLinkActive(child.navLink, currentURL, routerProps);
  });
};

/**
 * Search for parent object
 * @param {Array} navigation Group children
 * @param {string} currentURL current URL
 */

export const search = (navigation, currentURL, routerProps) => {
  let result;
  navigation.some((child) => {
    let children;
    // If child have children => It's group => Go deeper(recursive)
    if (child.children && (children = search(child.children, currentURL, routerProps))) {
      result = { id: child.id, children };
      return child;
    }

    // else it's link => Check for matched Route
    if (isNavLinkActive(child.navLink, currentURL, routerProps)) {
      result = { id: child.id };
      return child;
    }
  });
  return result;
};

/**
 * Loop through nested object
 * @param {object} obj nested object
 */
export const getAllParents = (obj, match) => {
  const res = [];
  const recurse = (obj, current) => {
    for (const key in obj) {
      const value = obj[key];
      if (value !== undefined) {
        if (value && typeof value === 'object') {
          recurse(value, key);
        } else {
          if (key === match) {
            res.push(value);
          }
        }
      }
    }
  };
  recurse(obj);
  return res;
};

//#region display Nav for permission
/**
 * @param {array} routes List route of app
 * @param {array} allowIds List of screen ids allowed to access
 * @param {object} features List of screen feature for role
 * @returns {object} { authorizedRoutes, pathsNotAllow, featureForRole }
 */
export const displayNavForPermissions = ({
  routes = [],
  allowIds = [],
  features = {},

  pathsNotAllow = [],
  featureForRole = {},
}) => {
  let authorizedRoutes = [];

  if (!allowIds.length) return;

  routes.forEach((route) => {
    if (route.children) {
      const hasAnyVisibleChild = route.children && route.children.some((i) => allowIds.includes(i.id));
      if (!hasAnyVisibleChild) {
        const paths = getPathChildrenNotAllow(route.children);
        pathsNotAllow.push(paths);

        return;
      }

      const data = {
        ...route,
        children: displayNavForPermissions({
          routes: route.children,
          allowIds,
          features,
          pathsNotAllow,
          featureForRole,
        })?.authorizedRoutes,
      };
      authorizedRoutes.push(data);
    } else if (allowIds.includes(route.id)) {
      authorizedRoutes.push(route);

      if (mapNavlinkInFeature(features, route)) Object.assign(featureForRole, mapNavlinkInFeature(features, route));
    } else {
      if (route.navLink) pathsNotAllow.push(route.navLink);
    }
  });

  return { authorizedRoutes, pathsNotAllow: pathsNotAllow.flat(1), featureForRole };
};

const getPathChildrenNotAllow = (routes = [], pathsNotAllow = []) => {
  if (routes.length) {
    routes.forEach((route) => {
      if (route.children) return getPathChildrenNotAllow(route.children, pathsNotAllow);

      if (route.navLink) {
        pathsNotAllow.push(route.navLink);
      }
    });
  }

  return pathsNotAllow;
};

const mapNavlinkInFeature = (features = {}, route = {}) => {
  if (route.id && features[route.id]) return { [route.navLink]: features[route.id] };
};
//#endregion

//#region convert permission for user group permission to array authorized route id
export const convertGroupPermissionsToAuthorizedForRole = (groupPermissions = [], defaultRouteId = []) => {
  const authorizedRouteId = [...defaultRouteId];
  const featuresPermission = {};

  groupPermissions.forEach((groupPermission) => {
    authorizedRouteId.push(groupPermission.code);

    if (groupPermission.permissionDtoList && groupPermission.permissionDtoList.length > 0) {
      groupPermission.permissionDtoList.forEach((permission) => {
        const status = permission.status !== 'HIDDEN';
        if (status) authorizedRouteId.push(permission.code);

        const code = status ? permission.code : groupPermission.code;
        Object.assign(featuresPermission, {
          [code]: formatSubPermissions(permission.subPermissionDtoList),
        });
      });
    }
  });

  return { authorizedRouteId, featuresPermission };
};

const formatSubPermissions = (subPermissions = []) => {
  const subPermissionObject = {};

  subPermissions.forEach((per) => {
    Object.assign(subPermissionObject, {
      [per.code]: [per.name],
    });
  });

  return subPermissionObject;
};
//#endregion
