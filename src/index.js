import React from "react";
import ReactDOM from "react-dom";
import Es6Promise from "es6-promise";
import ROOT from "./router";
import "./static/normalize.scss";
import 'element-theme-default';
import registerServiceWorker from './registerServiceWorker';
// public styles go here
Es6Promise.polyfill()
// this is required when you want react hmr
// if you don't need hmr,you can remove this


const render = (Component) => {
  ReactDOM.render(
    <Component/>,
    document.getElementById('app')
  );
};
render(ROOT);

registerServiceWorker();
