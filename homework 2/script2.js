let N = +prompt("Введіть початкове число");

while(!Number.isInteger(N) || isNaN(N)|| N < 0) {

alert("Потрібно ввести ціле число, яке більше нуля");

N = +prompt("Введіть початкове число");

};

let M = +prompt("Введіть кінцеве число");

while(!Number.isInteger(M) || isNaN(M)||M < N) {

    alert("Потрібно ввести ціле число, яке більше початкового числа");
    
    M = +prompt("Введіть кінцеве число");
    
    };

let numWhole = +confirm("Чи хотіли б ви пропускати парні числа");

let sum = 0;

let sum2 = 0;

if(numWhole){
    for (let index = N; index <= M; index++){
        if(index % 2 != 0)
            sum2 += index;
       } 
       document.writeln('<h1>',`Сума непарних чисел від ${N} до ${M}: ${sum2}`,'<h1>')
    } else {
        for (let index = N; index <= M; index++){
            sum += index;   
        }
        document.writeln('<h1>',`Сума чисел від ${N} до ${M}: ${sum}`,'<h1>')
       }
   