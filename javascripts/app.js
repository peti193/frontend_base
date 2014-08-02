var bird = function() {
	this.fly = function() {
		console.log("I'm fly on my way");
	}

	this.pen = false;
};

chicken = new bird();


bird.prototype.eat = function(something , number) {
	console.log("eat this:" + something + number);
};

chicken.fly();
console.log(chicken.pen);
chicken.eat("seeds" , 20);




