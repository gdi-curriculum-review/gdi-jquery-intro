var dog = {

	smelly:true,
	size:"small",
	color:"magenta"
}

var c = dog.color
var color = dog["color"]

dog.breed = "lab"

function describeDog(dog){
	console.log("Is dog smelly?"+dog.smelly+" dog's size is "+dog.size+" dog's breed is"+dog.breed);
}

describeDog(dog)