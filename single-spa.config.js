import { registerApplication, start } from "single-spa";

registerApplication(
  // Name of our single-spa application
  "home",
  // Our loading function
  () => import("./src/home/home.app.js"),
  // Our activity function
  () => location.pathname === "/home" || location.pathname === "/"
);
registerApplication(
  // Name of our single-spa application
  "cart",
  // Our loading function
  () => import("./src/cart/cart.app.js"),
  // Our activity function
  () =>
    location.pathname === "/movies" ||
    location.pathname === "/vue" ||
    location.pathname === "/recommendation"
      ? false
      : true
);
registerApplication(
  // Name of our single-spa application
  "movies",
  // Our loading function
  () => import("./src/movies/movies.app.js"),
  // Our activity function
  () =>
    location.pathname === "/cart" ||
    location.pathname === "/vue" ||
    location.pathname === "/recommendation"
      ? false
      : true
);
registerApplication(
  "vue",
  () => import("./src/vue/vue.app.js"),
  () =>
    location.pathname == "/movies" ||
    location.pathname === "/cart" ||
    location.pathname === "/recommendation"
      ? false
      : true
);
registerApplication(
  // Name of our single-spa application
  "recommendation",
  // Our loading function
  () => import("./src/recommendation/recommedation.app.js"),
  // Our activity function
  () =>
    location.pathname == "/movies" ||
    location.pathname === "/cart" ||
    location.pathname === "/vue"
      ? false
      : true
);
start();
