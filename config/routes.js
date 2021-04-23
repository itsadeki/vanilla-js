import Connection from "../controller/Connection.js";
import Home from "../controller/Home.js";
import Rules from "../controller/Rules.js";

const routes = {
  "/": {
    controller: Connection,
    view: "connection",
  },
  "/home": {
    controller: Home,
    view: "home",
  },
  "/rules": {
    controller: Rules,
    view: "rules",
  },
};

export default routes;
