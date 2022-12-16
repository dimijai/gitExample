class Student {
    static count = 0;
  constructor(name, age, phNo, brdMarks){
    this.name = name;
    this.age = age;
    this.phNo = phNo;
    this.brdMarks = brdMarks;
    Student.count++;
  }

check(){
    if(this.brdMarks>40)
    {
    	console.log("you are eligible");
    }
    else
    {
    	console.log("you are not eligible");
    }
   console.log('name:'+this.name) 
   console.log('age:'+this.age)
   console.log('phNo.:'+this.phNo) 
   console.log('board marks:'+this.brdMarks) 
}
}

const person1 = new Student('Shyamali Jaiswal',18,22222,80);
const person2 = new Student('Shweta Jaiswal',20,333333,55);
const person3 = new Student('Sam Arora',19,444444,35);
const person4 = new Student('Ayisha Gupta',21,666666,50);
const person5 = new Student('Arun Nair',17,555555,20);

console.log('Number of students = '+Student.count);
person1.check();
person2.check();
person3.check();
person4.check();
person5.check();

