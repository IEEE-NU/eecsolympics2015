Template.scoreboard.helpers({
    teams: function () {
        return Teams.find({}, {sort: {score: -1}});
    },
    noTeam: function () {
        return Team.find().count() === 0;
    }
});