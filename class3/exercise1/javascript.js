function calculate(){
    var age = 26;
    var oldAge = 96;
    var perDay = 2;

    var days = (oldAge - age) * 356;
    var total = perDay * days;
    var resultDiv = $('#lifetime-supply')
    if(total > 40000){
        resultDiv.html("You will need " + total + " to last you until the ripe old age of " + oldAge + ". Wow! That's a lot!");
    }else{
        resultDiv.html("You will need " + total + " to last you until the ripe old age of " + oldAge + ". You seem pretty reasonable");
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
