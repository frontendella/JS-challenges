import products from "./data.js";

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(data){
    const filtered = data.filter(candy => candy.type === 'sweet')
    return filtered.map(product => (
        {   
            item: product.item,
            price: product.price
        }
    ))
};

console.log(getSaleItems(products))

//Refactoring - using destructuring 

function getSaleItems(data) {
    const filtered = data.filter(candy => candy.type === 'sweet');
    return filtered.map(({item, price}) => ({item, price}));
}

console.log(getSaleItems(products));
