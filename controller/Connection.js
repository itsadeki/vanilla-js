import Controller from "../core/Controller.js";

class Connection extends Controller {
  form;

  constructor() {
    super();

    document.title = "Vanilla | connexion";

    this.form = document.getElementById("connection-form");
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      new FormData(this.form);
    });

    this.form.addEventListener("formdata", (e) => {
      const data = e.formData;

      if (data.get("email") === "" || data.get("password") === "") return;

      this.state.user.email = data.get("email");
      this.state.user.password = data.get("password");

      this.go("/home");
    });
  }
}

export default Connection;
