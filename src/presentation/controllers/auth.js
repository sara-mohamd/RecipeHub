const RegisteUser = require('../../application/usecases/user/register');
const Login = require('../../application/usecases/user/login');

const createNewUser = async (req, res, next) => {
  const register = new RegisteUser();
  const { username, password } = req.body;

  try {
    const token = await register.execute({ username, password });
    res.status(201).json({ message: `User registered successfully`, token });
  }
  catch (error) {
    next(error)
  }
}

const signin = async (req, res, next) => {
  const login = new Login();
  const { username, password } = req.body;

  try {
    const token = await login.execute({ username, password });
    res.status(200).json({ message: `Login successful`, token });
  } catch (err) {
    next(err);
  }
}

module.exports = { createNewUser, signin }