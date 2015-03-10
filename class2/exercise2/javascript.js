function calculate(){

    var income = 100;

    var days = 30;

    var per_day = income/days;

    var per_week= per_day * 7;

    var result = document.getElementById('daily_budget');

    if(per_day > 5){
        result.html("You have $" + per_day + " to spend per day and $"+per_week+" spend per week. You are Rich!")
    }else{
        result.innerHTML = "You have $" + per_day + " to spend per day and $"+per_week+" spend per week. You are Rich!"
    }
}

function favoriteThings(){
    var favoriteThings = ['Rabbits', 'Orange', 'Yogurt', 'Brussel Sprouts', 'Otters'];
    var result = 'My favorite things are: ';
    for (var i = 0; i<favoriteThings.length; i++){

        result += favoriteThings[i];
    }
    alert(result);
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
    var results = "My friends: "
    for(var i = 0; i < friends.length; i++){
        results += describeFriend(friends[i]);
    }
    alert(results)
}
function describeFriend(friend){
    return "My friend " + friend.name + " has " + friend.hair + " hair. ";
}