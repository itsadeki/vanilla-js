import Controller from "../core/Controller.js";

class Home extends Controller {
  constructor() {
    super();

    document.title = "Vanilla | home";

    console.log(this.state);

    this.replace("hello", "user", this.state.user.email);
  }
}

export default Home;
