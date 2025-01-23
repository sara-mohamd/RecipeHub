class User {
  constructor(id, username, email, password) {
    this.id = id;
    this.username = username;
    this.emial = email;
    this.password = password;
  }

  forgetPassword(newPassword) {
    if (newPassword.length < 6)
      throw new Error('Password must be at least 6 characters long');

    this.password = newPassword;
  }
  updateEmail(newEmail) {
    if (!newEmail.include('@'))
      throw new Error('Invalid Email');
    this.email = newEmail;
  }

  isValid() { }

}