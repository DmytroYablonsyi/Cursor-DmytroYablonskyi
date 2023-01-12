class Student{
    constructor(university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.mark = [5,4,4,5];
        this.status = true;
        }
        
    getInfo(){
        return console.log(`Студент ${this.course}го курсу, ${this.university}, ${this.fullName}`)
        }
    get marks(){
        if(this.status){
            return this.mark}
        else{
            return null;
        }
        }
    set marks(newMark){
        if(this.status){
            return this.mark.push(newMark)}
        else{
            return null;
        }
        }
    getAvaregaMark(){
        let avg = this.mark.reduce((acc,value) =>{
            return acc + value
        },0)
        return avg / this.mark.length 
        }
        dissmiss(){ 
            return this.status = false
        }
        recover(){
            return this.status = true
        }
}

class BudgetStudent extends Student{
    constructor (university, course, fullName){
             super(university, course, fullName);
             this.status = this.status;
             this.avg = this.getAvaregaMark();
             this.getScholarship(); 
    }    
    getScholarship(){
        this.avg = this.getAvaregaMark();
        if(this.avg <= 4 || !this.status){
            return setInterval(()=>console.log("Ви не отримаєте стипендію"),30000)
    }else{
       return setInterval(()=>console.log("Ви отримаєте стипендію в розмірі 1400 грн"),30000) 
    }
}
}
    
const result = new BudgetStudent('Cursor Academy', "1", "Yablonskyi Dmytro");

result.getInfo();
console.log(result.marks);
console.log(result.marks = 4);
console.log(result.marks);
console.log(result.getAvaregaMark());
result.dissmiss();
console.log(result.marks);
result.recover()
console.log(result.marks);






