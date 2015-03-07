Teams = new Mongo.Collection('teams');

Teams.allow({
    insert: function (userId, doc) {
        return (userId && isAdminID(userId));
    },
    update: function (userId, doc, fields, modifier) {
        return (userId && isAdminID(userId));
    },
    remove: function (userId, doc) {
        return (userId && isAdminID(userId));
    }
});

function isAdminID(userId) {
    var username = Meteor.users.findOne({_id: userId}).username;
    return username === 'ieee_admin';
}