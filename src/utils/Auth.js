
const Auth = {
    signOut() {
      sessionStorage.removeItem("login");
    },
    isAuth() {
      return sessionStorage.getItem("login");
    },
    isLoggedIn () {
        const login = sessionStorage.getItem("login");
        if (login && Object.keys(login).length > 0) {
          return true;
        } else {
          return false;
        }
    }
};
export default Auth;