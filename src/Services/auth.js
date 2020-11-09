const Auth = {
  isAuthenticated: false,
  Authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  logout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

module.exports= Auth; 