$(document).ready(function(){

$('#favorite-things').html("hello"); 

$('#favorite-things').click( function(){

$('#favorite-things').css("color","red");

$(this).css("color","red");

})


});