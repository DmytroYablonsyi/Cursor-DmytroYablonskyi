const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(arr){
  const female = arr.filter((student)=> student.endsWith("а"));
  const male = arr.filter((student)=> !student.endsWith("а"));
  return female.map((f,index)=> {
      return [f, male[index]]
    })
}
function getStudentTheme(pairs,themes){
  return pairs.map((pair,index)=> {
      return [pair.join(" і "),themes[index]]
  }) 
}

function getMarks(students,marks){
  return students.map((student,index)=> {  
    return [student, marks[index]]
  })
}

function getRandomMarks(pairs){
  function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max - min + 1))
  };
  
  return pairs.map((pair)=> {
    const randomMark = generateRandomInteger(1,5);
    return [...pair, randomMark]
  })
} 
const pairs = getPairs(students);
const theme = getStudentTheme(pairs,themes);
const randomResult = getRandomMarks(theme);
const studentMarks = getMarks(students, marks)

console.log("Function #1",[pairs])
console.log("Function #3",[theme])
console.log("Function #2",[studentMarks])
console.log("Function #4",[randomResult])