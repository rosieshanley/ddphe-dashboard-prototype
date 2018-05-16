/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";

import "core-js/fn/array/includes"; // Array.includes polyfill for IE11
import "core-js/fn/string/includes"; // String.includes polyfill for IE11
import "core-js/fn/string/starts-with"; // String.startswith polyfill for IE11
import "core-js/fn/object/entries"; // Object.entries polyfill for IE11
import "core-js/fn/object/values"; // Object.values polyfill for IE11
import "core-js/fn/number/is-nan"; // Number.isNaN polyfill
import "core-js/fn/number/parse-float"; // parseFloat polyfill
import "core-js/fn/array/find"; // Array.find

import App from "./App";
// import registerServiceWorker from './registerServiceWorker';

import "./index.css";

WebFont.load({
  google: {
    families: ["Open Sans:300,400,600", "sans-serif"]
  }
});

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./App", () => {
    ReactDOM.render(<App />, document.getElementById("root"));
  });
}

//export { default } from "./App";
