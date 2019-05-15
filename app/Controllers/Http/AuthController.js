"use strict";

const User = use("App/Models/User");

class AuthController {
  /**
   * Login
   * Action login user in API
   */
  async login({ request, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }

  /**
   * Store
   * Action for user save into database
   */
  async store({ request }) {
    const data = request.only(["email", "password"]);
    const user = await User.create(data);
    return user;
  }
}

module.exports = AuthController;
