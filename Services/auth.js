const Auth = {
  isAuthenticated: false,
  Authenticate(cb) {
    this.Authenticate = true;
    setTimeout(cb, 100);
  },
  logout(cb) {
    this.Authenticate = false;
    setTimeout(cb, 100);
  },
};
