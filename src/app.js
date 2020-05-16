// login click handler
$('#login').click(function () {
    // create a Greetr object. Let's assume we got the name from login api
    var loginGreetr = G$('Vikas', 'Pawale');
    //hide login div
    $('#logindiv').hide()
    //show greeting
    loginGreetr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log()

});