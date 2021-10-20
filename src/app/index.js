import React from "react";
import logger from "@sky0014/logger";
import { Router } from "@reach/router";

import "./app.global.styl";

import Home from "../page/home";

logger.setPrefix("${PROJECT_NAME}");
logger.setEnable(true);

const routers = [
  {
    path: "/",
    component: Home,
  },
];

export default function App() {
  return (
    <Router>
      {routers.map((route, index) => (
        <route.component key={index} path={route.path} />
      ))}
    </Router>
  );
}
