import User from "../model/User.js";

class Context {
  static instance;

  state = {
    user: new User(),
  };

  static getInstance() {
    if (this.instance === undefined) {
      this.instance = new Context();
    }
    return this.instance;
  }
}

export default Context;
