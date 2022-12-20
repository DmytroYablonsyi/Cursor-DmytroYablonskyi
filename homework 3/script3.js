//  function 1
 function getNumPow(num ,pow) {
    let powNum = 1;
     for (let i = 0; i < pow; i++) {
        powNum *= num;
    }
    return powNum
 }
//  function 2
function upperFirstWord (name){

   let upperWord = name.toLowerCase();
   let formateName = upperWord.charAt(0).toUpperCase() + upperWord.slice(1);
   return formateName;
}
//  function 3 
 function salaryTax (a){
 let fullSalary = a;
   let salary = (fullSalary-(fullSalary * 0.195));
    return salary
 }
//  function 4

 function getRandomValue(min, max) {
   return  (Math.round(Math.random() * (max - min) + min));
   
  }
//  function5
let password;
 function getRandomPass (){
  password =  ((Math.random()).toFixed(4)).slice(2)
  return password
 }

// function 6

function deleteWords(letter, word){
   let arrWord = word.toLowerCase().replaceAll(letter, "");
   return arrWord
}

document.writeln(
   `<p><b>Function 1</b>: 2 в степені 3 =  ${(getNumPow(2,3))}</p>
   <p><b>Function 2</b>: Робимо першу букву імені великою: дМитРо - ${upperFirstWord("дМитРо")}</p>
   <p><b>Function 3</b>: Вираховуєм податок з зарплати: 2500грн - ${salaryTax(2500)}</p>
   <p><b>Function 4</b>: Створюємо рандомне число від 1 до 100: ${getRandomValue(1, 100)}</p>
   <p><b>Function 5</b>: Створюємо рандомний пароль з чотирьох цифр: ${getRandomPass()}</p>
   <p><b>Function 6</b>: Видаляємо всі букви "a" у слові "Advanced": ${deleteWords("a", "Advanced")}</p>
   `
)


