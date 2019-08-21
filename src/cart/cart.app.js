import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Cart from "./root.component.js";

function domElementGetter() {
  return document.getElementById("cart");
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Cart,
  domElementGetter
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];
