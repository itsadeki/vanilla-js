import routes from "../config/routes.js";

class App {
  route;
  controller;

  constructor() {
    this.router();
  }

  router() {
    document.addEventListener("route", (e) => {
      history.pushState(
        {
          route: e.detail,
        },
        "",
        e.detail
      );
      this.render();
    });

    window.onpopstate = (e) => {
      this.render();
    };

    this.render();
  }

  render() {
    this.route = routes[window.location.pathname || "/"];
    fetch(`/page/${this.route.view}.html`)
      .then((raw) => raw.text())
      .then((txt) => {
        document.getElementById("app").innerHTML = txt;
        this.controller = new this.route.controller();
      })
      .catch((err) => console.error(err));
  }
}

export default App;
