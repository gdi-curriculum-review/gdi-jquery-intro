function calculate(){
    var income = 100;
    var days = 30;

    var per_day = income/days;

    var per_week= per_day * 7;

    var resultDiv = document.getElementById('daily_budget')

    if(per_day > 40000){
        resultDiv.innerHTML = "You have $" + per_day + " to spend per day and $"+per_week+" spend per week. You are Rich!";
    }else{
        resultDiv.innerHTML = "You have $" + per_day + " to spend per day and $"+per_week+" spend per week , Make some phone calls!";
    } 
}

function favoriteThings(){

    var favoriteThings = ['Rabbits', 'Orange', 'Yogurt', 'Brussel Sprouts', 'Otters'];
    var resultDiv = document.getElementById('favorite-things');
    
    var resultParagraph = document.createElement('p');
    var result = 'My favorite things are: ';
    
    for (var i = 0; i<favoriteThings.length; i++){

            result += favoriteThings[i];
    }
    resultParagraph.innerHTML = result;
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
        var resultText += document.createTextNode(describeFriend(friends[i]));
        resultParagraph.appendChild(resultText);
        resultDiv.appendChild(resultParagraph);
    }
    document.body.appendChild(resultDiv);
}
function describeFriend(friend){
    return "My friend " + friend.name + " has " + friend.hair + " hair. ";
}