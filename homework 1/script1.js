let apple = 15.678;
let orange = 123.965;
let cherry = 90.2345;

// --------------------task1---
let productPriceMax = Math.max(15.678, 123.965, 90.2345);

console.log(`Mаксимальне значення:${productPriceMax}`); 

// --------------task2------------------

let productPriceMin = Math.min(15.678, 123.965, 90.2345);

console.log(`Мінімальне значення ${productPriceMin}`); 

// --------------task3------------------

let fullPrice = (apple + orange + cherry);

console.log(`Вартість всіх товарів: ${fullPrice}`);

// --------------task4------------------

let applePrice2 = Math.floor(apple);

let orangePrice2 = Math.floor(orange);

let cherryPrice2 = Math.floor(cherry);

let fullPrice2 = (applePrice2 + orangePrice2 + cherryPrice2)

console.log(`Вартість всіх товарів без копійое: ${fullPrice2}`)

// --------------task5------------------

function roundTo(number, value){
    return Math.round(number/value) * value
}

console.log("Вартість всіх товарів округлена до сотень:" , roundTo(fullPrice2, 100))

// --------------task6------------------

if (fullPrice2 % 2 == 0){
    console.log("Сума всіх товарів парне число:" , true )
} else{
    console.log("Сума всіх товарів непарне число:" , false)
};

// --------------task7------------------

let sumOfRest = (500 - fullPrice);

console.log(`Сума решти: ${sumOfRest}`);

// --------------task8------------------

let fruits = [apple, orange, cherry];

let sum = 0;

for (let index = 0; index < fruits.length; index++) {
     sum += fruits[index];
}
  let mediumSum = (sum/fruits.length);

  console.log("Середнє значення цін:", mediumSum.toFixed(2));
// ----------------------task9----------------
const randomValue = Math.random();
const min = 1;
const max = 100;
const randomDiscount = Math.floor((max - min) * randomValue + min);
console.log(`Випадкова знижка: ${randomDiscount}%`)

// ------------------task10-----------------

let discount = (fullPrice * (randomDiscount/100));

let discountPrice = (fullPrice - discount);

console.log("Вартість товару з випадковою знижкою", Math.floor(discountPrice));

// -----------------task11------------------

let cost = (fullPrice / 2);
let profit = (cost - discount);
console.log(`Чистий прибуток складає: ${profit.toFixed(2)}`)