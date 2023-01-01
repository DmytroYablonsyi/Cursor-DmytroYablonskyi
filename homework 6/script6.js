const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
             }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
            }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
            }
    }
];
// task 1

function getSubjects(student){
    const subject = Object.keys(student.subjects);
    const result = subject.map((value) => { 
    const newValue = value.charAt(0).toUpperCase() + value.slice(1);
            if(newValue.includes("_")){
           return newValue.replace("_", " ")
    }
        return newValue
    }) 
    return (`${student.name}:`, result)
}
//  task 2

function getAvarageMark(student){
   let arrayMarks = Object.values(student.subjects);
   let sum = 0;
   let count = 0;
  for(let marks of arrayMarks){
    marks.map((value) =>{
        sum += value
        count ++
    })
  }
  let avg = (sum/count).toFixed(2)
   return avg
}
// task 3

function getStudentInfo(student){
    const arr = student
    student.averageMark = getAvarageMark(student)
    const {course, name, averageMark} = arr;
return  {course, name, averageMark}
}
// task 4

function getStudentsName(students){
    const nameArr = students.map((value) =>{
  return (value.name)
   })
return nameArr.sort()
}

// task 5

function getBestStudent(students){
    let result;
    let mark = 0;
    for (let element of students){
        if(mark < getAvarageMark(element)){
         mark = getAvarageMark(element);
        result = element.name
     }
    }
    return result
}
// task 6
function getWordLetters(word){
    const occurances = word.split('').reduce((acc,value)=>{
           if(!acc[value]){
               return {
                   ...acc,
                   [value]: 1
               }
           }else{
               return {
                   ...acc,
                   [value]: acc[value] + 1
               }
           } 
       },{})
      return occurances
   }
 
   console.log("Function №1:", getSubjects(students[2]));
   console.log("Function №2:", getAvarageMark(students[1]));
   console.log("Function №3:", getStudentInfo(students[2]));
   console.log("Function №4:", getStudentsName(students));
   console.log("Function №5:", getBestStudent(students));
   console.log("Function №6:", getWordLetters("Ukraine"));
  