Template.register.events({
    'submit form': function (event) {
        event.preventDefault();
        event.stopPropagation();

        if ($('#name').parent().hasClass('has-success') &&
            $('#members').parent().hasClass('has-success')) {
            
            var name = $('#name').val();
            var members = $('#members').val().split(',');
            // var pw = $('#password').val();
            // var confirm = $('#confirm').val();

            var team = {
                name: name,
                members: members,
                score: 0
            };

            Meteor.call('makeTeam', team, function (err, res) {
                if (err) {
                    alert(err + 'Please contact an IEEE representative for support.');
                }
                else {
                    alert('Team successfully created! You can go back to the scoreboard now.');
                    // Accounts.createUser({
                    //     username: name,
                    //     password: pw
                    // }, function () {
                    //     alert('Team successfully created! You can go back to the scoreboard now.');
                    // });                    
                }
            });
        }
        else {
            alert('Please check that all fields are completed properly and try again.');
        }
    },
    'keyup #name': function (event) {
        var name = $('#name').val();
        $('#name').parent().addClass('has-feedback');
        if (Teams.findOne({name: name})) {
            $('#name').parent().addClass('has-error');
            $('#name-not-ok').show();
            
            $('#name').parent().removeClass('has-success');
            $('#name-ok').hide();
        }
        else {
            $('#name').parent().addClass('has-success');
            $('#name-ok').show();

            $('#name').parent().removeClass('has-error');
            $('#name-not-ok').hide();
        }
    },
    'keyup #members': function (event) {
        var members = $('#members').val().split(',');
        $('#members').parent().addClass('has-feedback');

        if (members.length === 2) {
            $('#members').parent().addClass('has-success');
            $('#members-ok').show();

            $('#members').parent().removeClass('has-error');
            $('#members-not-ok').hide();

        }
        else {
            $('#members').parent().addClass('has-error');
            $('#members-not-ok').show();

            $('#members').parent().removeClass('has-success');
            $('#members-ok').hide();
        }
    },
    // 'keyup #password': function (event) {
    //     var pw = $('#password').val();
    //     $('#password').parent().addClass('has-feedback');
    //     if (pw.length > 5) {
    //         $('#password').parent().addClass('has-success');
    //         $('#password-ok').show();
    //         $('#password').parent().removeClass('has-error');
    //         $('#password-not-ok').hide();
    //     }
    //     else {
    //         $('#password').parent().addClass('has-error');
    //         $('#password-not-ok').show();
    //         $('#password').parent().removeClass('has-success');
    //         $('#password-ok').hide();
    //     }
    // },
    // 'keyup #confirm': function (event) {
    //     var pw = $('#password').val();
    //     var confirm = $('#confirm').val();

    //     $('#confirm').parent().addClass('has-feedback');

    //     if (pw === confirm) {
    //         $('#confirm').parent().addClass('has-success');
    //         $('#confirm-ok').show();
    //         $('#confirm').parent().removeClass('has-error');
    //         $('#confirm-not-ok').hide();
    //     }
    //     else {
    //         $('#confirm').parent().addClass('has-error');
    //         $('#confirm-not-ok').show();
    //         $('#confirm').parent().removeClass('has-success');
    //         $('#confirm-ok').hide();
    //     }
    // }
});