import { routes } from "@/router";

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
export const staticRoutes = routes[0].children.map(({ path, name }) => ({
  path,
  title: name,
}));
