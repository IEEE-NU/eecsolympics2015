function requireLogin() {
    if (Meteor.user()) {
        this.next();
    }
    else {
        this.render('login');
    }
}

Router.configure({
    layoutTemplate: 'layout'
});

Router.onBeforeAction(requireLogin, { only: 'admin' });

Router.route('/', 'scoreboard');

Router.route('/register/', 'register');

Router.route('/admin/', { name: 'admin'});

Router.route('/login/', 'login');

Router.route('/edit/', 'edit');