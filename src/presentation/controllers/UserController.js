const UserRepository = require('../../infrastructure/database/repository/PrismaUserRepository');
const RegisteUser = require('../../application/usecases/user/registeUser');
const GetUserByUsername = require('../../application/usecases/user/getUserByUsername');
const DeleteUser = require('../../application/usecases/user/deleteUser');
const PrismaUserRepository = require('../../infrastructure/database/repository/PrismaUserRepository');
class UserController {

  static async register(req, res) {
    const { username, email, password } = req.body;

    const userRepository = new UserRepository();
    const registerUser = new RegisteUser(userRepository);

    try {
      const user = await registerUser.execute({ username, email, password });
      res.status(201).json({ message: `User registered successfully`, user });
    }
    catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getUserByUsername(req, res) {
    const { username } = req.query;

    const userRepository = new PrismaUserRepository();
    const getUserByUsername = new GetUserByUsername(userRepository);
    try {
      const user = await getUserByUsername.execute(username);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async deleteUser(req, res) {
    const { username } = req.query;
    const userRepository = new PrismaUserRepository();
    const deleteUser = new DeleteUser(userRepository);
    try {
      await deleteUser.execute(username);
      res.status(201).json({ message: `${username} deleted sucessfully` });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = UserController;
