Template.login.events({
    'submit form': function (event) {
        event.preventDefault();
        event.stopPropagation();

        var username = event.target.username.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(username, password);
    }
});