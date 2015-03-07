function requireLogin() {
    if (Meteor.user() === undefined) {
        this.render('/login/');
    }
    else {
        this.next();
    }
}

Router.configure({
    layoutTemplate: 'layout'
});

Router.onBeforeAction(requireLogin, {
    only: ['admin', 'edit']
})

Router.route('/', 'scoreboard');

Router.route('/register/', 'register');

Router.route('/admin/', function() {
    this.render('admin', {name: 'admin'})
});

Router.route('/edit/', 'edit');