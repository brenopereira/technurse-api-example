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

  /**
   * Profile
   * Action for return authenticated user
   */
  async profile({ auth, response }) {
    try {
      return await auth.getUser();
    } catch (error) {
      response.send("You are not logged in");
    }
  }
}

module.exports = AuthController;
