function calculate(){
    var income = 100;

    var days = 30;

    var per_day = income/days;

    var per_week= per_day * 7;

    resultDiv = $('#daily_budget');

    if(per_day > 5){
        resultDiv.html("You have $" + per_day + " to spend per day and $"+per_week+" spend per week. You are Rich!" );
    }else{
        resultDiv.html("You have $" + per_day + " to spend per day and $"+per_week+" spend per week , Make some phone calls!" );
    }
}

function favoriteThings(){
    var favoriteThings = ['Rabbits', 'Orange', 'Yogurt', 'Brussel Sprouts', 'Otters'];
    var resultDiv = $('#favorite-things');
    
    var resultParagraph = $('<p></p>');
    var result = 'My favorite things are: ';
    
    for (var i = 0; i<favoriteThings.length; i++){
        if (i < favoriteThings.length - 1){
            result += favoriteThings[i] + ', ';
        }else{
            result += "and " + favoriteThings[i] + '.';
        }
    }
    resultParagraph.append(result);
    resultDiv.append(resultParagraph);
}
function myFriends(){
    var friends = [
        {name: 'Santa Claus',
        hair: 'red'},
        {name: 'Easter Bunny',
        hair: 'brown'},
        {name: 'Tooth Fairy',
        hair: 'blue'}
    ];
    var resultDiv = $('<div></div>')
    
    var introParagraph = $('<p>My friends are:</p>');
    resultDiv.append(introParagraph)
    
    for(var i = 0; i < friends.length; i++){
        var resultParagraph = $('<p>' + describeFriend(friends[i]) + '</p>');
        resultDiv.append(resultParagraph);
    }
    $('body').append(resultDiv);
}
function describeFriend(friend){
    return "My friend " + friend.name + " has " + friend.hair + " hair. ";
}
