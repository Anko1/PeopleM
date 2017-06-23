var users = new Array();
var ids = 0;

var createPeople = function () {
    var u = new User(ids++);
    // alert('cp');


    u.name = $('#name').val();
    u.sex = $('#sex').val();
    u.date = $('#bdate').val();
    u.address = $('#address').val();
    u.phone = $('#phone').val();
    u.mail = $('#mail').val();


    console.log(u);

    if (u.name && u.sex && u.date && u.address && u.phone && u.mail) {
        u.render();
        // alert('i');
    }

    // console.log(u);

    return u;
};

function validate(cd) {
    var adr = $('#address').val().split(' ').join('+');

    console.log(adr);

    $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + adr + "&key=AIzaSyDQUJdc7IrJ9VxZwBD0M1FB91m2kELn1PM",
        // contentType: "text/html; charset=UTF-8",
        success: function (result) {
            // alert('+');

            cd();

            $('#form').trigger('reset');

        },
        error: function (err) {
            // alert('-');
            return false;
        }
    });
}
