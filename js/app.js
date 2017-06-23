$(function () {

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    $('#add').click(function (e) {
        e.preventDefault();

        // alert('on');

        validate(createPeople);

    })
});
