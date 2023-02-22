import { routes } from "@/router";

// example:
// export const staticRoutes = [
//   {
//     title: `Home`,
//     path: `/`,
//   },
//   {
//     title: `About`,
//     path: `/about`,
//   },
// ];

//  generate staticRoutes based on routes
//  the level of routes is predefined as two
//  the children of first level route will be put into the tabs
const appRoute = routes[0];

export const staticRoutes = appRoute.children.map(
  ({ path, name, children }) => ({
    path,
    title: name,
    children: children
      ? children.map((child) => ({
          path: child.path,
          title: child.name,
        }))
      : [],
  })
);
