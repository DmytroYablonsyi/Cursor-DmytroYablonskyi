// Function #1
function getRandomArray(length, min, max){
    let arrayNum = [];
    for(let i = 0; i < length; i++){
       const element = Math.round(Math.random() * (max - min) + min)
        arrayNum.push(element)
    }  
    return arrayNum
}
// Function #2
function getAvarage(...numbers){
    let sumNum = 0;
    const numInteger = numbers.filter((n) => Number.isInteger(n)).map((num) => {
        sumNum += num;
    });
   let avgNumber = sumNum/numInteger.length
    return avgNumber
}
console.log(getAvarage(1,2,36,4.7,4,5,6,6,8))

// Function #3
function getMedian(...numbers){
    const numInteger = numbers.filter((n) => Number.isInteger(n));
    if(numInteger.length % 2 == 0){
        const medianNum = (((numInteger.length / 2) + 1) + (numInteger.length / 2))/2
    return medianNum 
} else { 
    const medianNum = (((numInteger.length - 1) / 2) + 1);
    return medianNum 
}
   
}
// Function #4
 
function filterEvenNumber(...numbers){
    const arrEven = numbers.filter((number)=> !(number % 2 == 0));
    return arrEven
}
// Function #5

function countPositiveNumbers(...numbers){
    const positive = (numbers.filter((number)=> (number >= 0))).length;
    return positive
}
// function #6
function getDividedByFive(...numbers){
    const divideFive = numbers.filter((number)=> (number % 5 == 0));
    return divideFive
}
// function #7

function replaceBadWord(input,scalableBadWords){
    const initialBadWords = ["fuck","shit"];
    if(scalableBadWords.length > 0){
        initialBadWords.push(...scalableBadWords)
    }
    const wordsArray = input.split(" ");
    return wordsArray.map((w)=>{
        const word = w.toLowerCase();
        for(let badWord of initialBadWords){
            if(word.includes(badWord)){
                return word.replace(badWord, "*".repeat(badWord.length))
            } 
        }
        return word
    }).join(" ")
}

console.log("Function №1:", getRandomArray(15,1,100));
console.log("Function №2:", getAvarage(1,2,3,4,4,4,5,6));
console.log("Function №3:", getMedian(1,2,3,4,4,4,5,6));
console.log("Function №4:", filterEvenNumber(1,2,3,4,4,4,5,6));
console.log("Function №5:", countPositiveNumbers(1,2,3,4,4,4,5,6));
console.log("Function №6:", getDividedByFive(1,2,3,4,4,4,5,6));
console.log("Function №7:", replaceBadWord("Fuck you bullshit",""));


