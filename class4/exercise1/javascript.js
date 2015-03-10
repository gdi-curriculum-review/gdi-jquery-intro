$(document).ready(function(){
    getMeetups();
    $('.box').bind({
        click: function() {
          $(this).css('background-color', 'green')
          $(this).html('Clicked!')
        },
        mouseenter: function() {
          $(this).css('background-color', 'purple')
          $(this).html('Hi!')
        },
        mouseleave: function(){
          $(this).css('background-color', 'orange')
          $(this).html('Bye!')
        }
    });
    $('#calculate').submit(function(event){
        var days = $('#days').val();
        var income = $('#income').val();
        $('#daily-budget').html(calculate(days,income));
        return false;
    });
    $('#favorites').submit(function(event){
        var givenThing = $('#thing').val();
        favoriteThings(givenThing);
        return false
    });
    $('#friends').submit(function(event){
       var name = $('#friend-name').val();
       var hair = $('#friend-hair').val()
       var friend = {name: name, hair:hair};
        myFriends(friend);
        return false;
    });
});

function getMeetups(){
	var api_key = "50722e1d56c194e61763a2ee1e4535";
	var url = "https://api.meetup.com/2/";
	var method = "open_events"
	$.ajax({
		url: url + method,
		data: {
		  key: api_key,
		  lat: 40.7143528,
		  lon: -74.0059731,
		  topic: 'JavaScript'
		},
		crossDomain: true,
		dataType: 'jsonp',
		type: "GET",
		success: function (data) {
		    console.log(data)
		},
		error: function(data) {
			console.log("Error", data);
		}				
	});
}

function calculate(days,income){

    var per_day = income/days;

    var per_week= per_day * 7;

    if(per_day > 5){
        return "You have $" + per_day + " to spend per day and $"+per_week+" spend per week. You are Rich!" ;
    }else{
        return "You have $" + per_day + " to spend per day and $"+per_week+" spend per week , Make some phone calls!";
    }
}

function favoriteThings(thing){
    $('#favorite-things').append('<p>'+ thing +'</p>');
}
function myFriends(friend){
    var resultDiv = $('<div></div>')
    var resultParagraph = $('<p>' + describeFriend(friend) + '</p>');
    resultDiv.append(resultParagraph);
    $('body').append(resultDiv);
}
function describeFriend(friend){
    return "My friend " + friend.name + " has " + friend.hair + " hair. ";
}