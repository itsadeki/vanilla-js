import Controller from "../core/Controller.js";

class Rules extends Controller {
  constructor() {
    super();
    console.log("rules");

    setTimeout(() => {
      this.go("/home");
    }, 3000);
  }
}

export default Rules;
