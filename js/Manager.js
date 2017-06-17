var users = new Array();
var ids = 0;

function createPeople() {
    var u = new User(ids++);    
    
    u.name = $('#name').val();
    u.sex = $('#sex').val();
    u.date = $('#bdate').val();
    u.address = $('#address').val();
    u.phone = $('#phone').val();
    u.mail = $('#mail').val();

    //Порадьте хтось як це написати краще))
    if(u.name && u.sex && u.date && u.address && u.phone && u.mail){ u.render();}

    // console.log(u);

    return u;
}