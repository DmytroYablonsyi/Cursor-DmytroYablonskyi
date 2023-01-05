const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// Task 1

function getMyTaxes(salary){
    const myTaxes = this.tax * salary;
    return myTaxes
}

// Task 2

function getMiddleTaxes(){
    const midTax = this.tax * this.middleSalary;
    return midTax
}

// Task 3

function getTotalTaxes(){
    const totalTax = this.tax * this.middleSalary * this.vacancies;
    return totalTax
}

// Task 4

function getMySalary(country){
    let mySalary = {};
    mySalary.salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
    mySalary.taxes = Math.floor(getMyTaxes.call(country ,mySalary.salary));
    mySalary.profit = mySalary.salary - mySalary.taxes;
    return mySalary
}

console.log('Function #1', getMyTaxes.call(ukraine, 2700));
console.log('Function #2',getMiddleTaxes.call(ukraine));
console.log('Function #3',getTotalTaxes.call(ukraine));
console.log('Function #4:',getMySalary(ukraine));
setInterval(() => console.log(getMySalary(ukraine)),10000);

