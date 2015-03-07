Template.admin.helpers({
    teams: function () {
        return Teams.find({}, {sort: {score: -1}});
    }
});

Template.admin.events({
    'click span': function (event) {
        event.preventDefault();
        event.stopPropagation();

        $(event.currentTarget).parent().children('.expandable').slideToggle();
    },
    'click .btn-danger': function (event) {
        event.preventDefault();
        event.stopPropagation();

        Teams.remove({_id: this._id});
    },
    'click .btn-success': function (event) {
        event.preventDefault();
        event.stopPropagation();

        var change = parseInt($(event.currentTarget).parent().children('input').val());
        if (!isNaN(change)) {
            Teams.update({_id: this._id}, {$inc: {score: change}});            
        }
    }
});