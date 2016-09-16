module.exports = {
    loggedIn: false,
    login(callback) {
        VK.Auth.login(function(data) {
            this.loggedIn = true;
            callback && callback();
        });
    },

    logout(callback) {
        VK.Auth.logout(function(data) {
            this.loggedIn = false;
            callback && callback();
        });
    },

    isLogged() {
        return this.loggedIn;
    }
}
