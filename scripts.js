function Phone(brand, price, color, weight) {
	this.brand = brand;
	this.price = price;
	this.color = color;
  	this.weight = weight;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "." + " It weighs only " + this.weight + "!");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "143g");
var SamsungGalaxyS6 = new Phone("Samsung", 1149, "gold", "138g");
var OnePlusOne = new Phone("OnePlus", 2040, "black", "162g");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
