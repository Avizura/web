module.exports = {
    loggedIn: false,
    login(callback) {
        VK.Auth.login(function(data) {
            console.log(data.status)
            this.loggedIn = true;
            callback && callback();
        });
    },

    logout(callback) {
        VK.Auth.logout(function(data) {
            console.log(data);
            this.loggedIn = false;
            callback && callback();
        });
    },

    isLogged() {
        return this.loggedIn;
    }
}
