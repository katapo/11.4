function Phone(brand, price, color, weight, discount) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.weight = weight;
}


Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "." + " It weighs only " + this.weight + "!");
}


var iPhone6S = new Phone("Apple", 2250, "silver", "143g");
var samsungGalaxyS6 = new Phone("Samsung", 1149, "gold", "138g");
var onePlusOne = new Phone("OnePlus", 2040, "black", "162g");

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();



Phone.prototype.applyDiscount = function(discount) {
    this.price = this.price - discount;
    return this.price;
}

iPhone6S.applyDiscount(40);
samsungGalaxyS6.applyDiscount(40);
onePlusOne.applyDiscount(40);

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();