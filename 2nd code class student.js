class Student {
    constructor(name, age, phNo, BrdMarks){
      this.name = name;
      this.age = age;
      this.phNo = phNo;
      this.BrdMarks = BrdMarks;
    }
  
    eligibleForPlacements=()=>{
        var minBrdMarks = 60;
        var reqAge = 18;
        if(this.BrdMarks > minBrdMarks && this.age > reqAge)
        {
            console.log('name:'+this.name) 
            console.log('age:'+this.age)
            console.log('phNo.:'+this.phNo) 
            console.log('board marks:'+this.BrdMarks) 
            console.log('')
        
        }    
    }
}
  
const person1 = new Student('Shyamali Jaiswal',17,22222,80);
const person2 = new Student('Shweta Jaiswal',20,333333,65);
const person3 = new Student('Sam Arora',19,444444,35);
const person4 = new Student('Ayisha Gupta',21,666666,70);
const person5 = new Student('Arun Nair',18,555555,20);
  
console.log("LIST OF ELIGIBLE STUDENTS FOR PLACEMENT:");
  
person1.eligibleForPlacements();
person2.eligibleForPlacements();
person3.eligibleForPlacements();
person4.eligibleForPlacements();
person5.eligibleForPlacements();
