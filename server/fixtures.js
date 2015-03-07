if (Meteor.users.find().count() === 0) {
    var admin = Assets.getText('admin').split(',')

    Accounts.createUser({
        username: admin[0],
        email: admin[1],
        password: admin[2],
        profile: {
          first_name: admin[3],
          last_name: admin[4]
        }
    });
}

// if (Teams.find().count() === 0 && DEBUG === 1) {
//     var teams = [
//         {
//             name: "Kevin's Crew",
//             members: ['kevin', 'jason'],
//             score: 5000
//         },
//         {
//             name: "Brittany's Team",
//             members: ['britt', 'lee'],
//             score: 1000
//         },
//         {
//             name: "noob_team",
//             members: ['noob1', 'noob2'],
//             score: 100
//         }
//     ];

//     for(var i in teams) {
//         Teams.insert(teams[i]);
//     }
// }