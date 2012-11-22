function calculate(){
    var age = 26;
    var oldAge = 96;
    var perDay = 2;

    var days = (oldAge - age) * 356;
    var total = perDay * days;
    var resultDiv = document.getElementById('lifetime-supply')
    if(total > 40000){
        resultDiv.innerHTML = "You will need " + total + " to last you until the ripe old age of " + oldAge + ". Wow! That's a lot!";
    }else{
        resultDiv.innerHTML = "You will need " + total + " to last you until the ripe old age of " + oldAge + ". You seem pretty reasonable";
    } 
}

function favoriteThings(){
    var favoriteThings = ['Rabbits', 'Orange', 'Yogurt', 'Brussel Sprouts', 'Otters'];
    var resultDiv = document.getElementById('favorite-things');
    
    var resultParagraph = document.createElement('p');
    var result = 'My favorite things are: ';
    
    for (var i = 0; i<favoriteThings.length; i++){
        if (i < favoriteThings.length - 1){
            result += favoriteThings[i] + ', ';
        }else{
            result += "and " + favoriteThings[i] + '.';
        }
    }
    var resultText = document.createTextNode(result);
    resultParagraph.appendChild(resultText);
    resultDiv.appendChild(resultParagraph);
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
    var resultDiv = document.createElement('div');
    
    var introParagraph = document.createElement('p');
    var introText = document.createTextNode('My friends are:');
    introParagraph.appendChild(introText);
    resultDiv.appendChild(introParagraph)
    
    for(var i = 0; i < friends.length; i++){
        var resultParagraph = document.createElement('p');
        var resultText = document.createTextNode(describeFriend(friends[i]));
        resultParagraph.appendChild(resultText);
        resultDiv.appendChild(resultParagraph);
    }
    document.body.appendChild(resultDiv);
}
function describeFriend(friend){
    return "My friend " + friend.name + " has " + friend.hair + " hair. ";
}