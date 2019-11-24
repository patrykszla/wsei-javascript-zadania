function Basket(product, price) {
    this.product = ['mieso'];
    this.price = 0;
}

 Basket.prototype.addProduct = function(name, price) {
    let newProduct = {
        name: name,
        price: price
    };
 }

Basket.prototype.showBasket = function() {
    console.log(this.product)
}

console.log(Basket);
let m = new Basket();
console.log(m);
