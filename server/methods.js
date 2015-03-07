Meteor.methods({
    makeTeam: function (team) {
        Teams.insert(team);
        return 1;
    }
}); 