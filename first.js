
//Object
/*const student = {
    name: 'Anindita Chaturbedi',
    age: 21,
    cgpa:8.8,
    isStudent: true
};

const name = "Anindita Chaturbedi";
name = "Anindita";
console.log(student["name"]);


//Arithmetic Opeartors uses

let a =5, b=3;
console.log("a =",a, "&b =",b);
console.log("a + b =",a+b);
console.log("a - b =",a-b);
console.log("a * b =",a*b);
console.log("a / b =",a/b);
console.log("a % b =",a%b);
console.log("a ** b =",a**b);


let a =5, b=3;
b= ++a;
console.log("a =",a, "&b =",b);
*/

// odd and even no find

/*let no= 7;
if(no % 2 ==0){
    console.log("Even");
}else{
    console.log("Odd");
}
*/
//find smallest no
/*
let num =2, num1 =4;
if(num<num1){
    console.log("num is smallest");
}else{
    console.log("num1 is smallest");
}

//syntax -> Rules



//Ternary Operator
let age =98;
console.log(age>20 ?"elligible":"not"
);

*/

// Switch case

/*let name = "bitan";
switch(name){
    case "ana":
        console.log("Gold medal owner");
        break;
    case "bikan":
        console.log("Silver medal owner");
        break;
    case "chiku":
        console.log("Bronze medal owner");
        break;
    default:
        console.log("Don't have any one of them!");
}*/

/*let num = prompt("Enter the number: ");
if (num%5 ===0){
    console.log(num,"is multiple of 5");
}else{
    console.log(num,"is not multiple of 5");
}


let score =prompt("The score is: ");
if(score>=90 && score<=100){
    console.log("Grade A");
}else if(score>=70 && score<=89){
    console.log("Grade B");
}else if(score>=60 && score<=69){
    console.log("Grade C");
}
else if(score>=50 && score<=59){
    console.log("Grade D");
}
else if(score>=0 && score<=49)
{
    console.log("Grade F");
}

*/


/*for (let count=1; count<=10000; count++){
    console.log("Anindita made it");
}

console.log("Loop ends here!");*/

// calc sum of 1 to 5

/*let sum =0;
let count;

for(count=1; count<=5; count++){
    sum += count;
}
console.log("Sum : ",sum);
console.log("Sum got");
console.log("last count:",count);

*/



/*let i=1;
while(i<=7){
    console.log("Start");
    i++;
}*/


// for-of

/*let str="Anindita";
let len=0;

for (let char of str){// iterators -> i
    console.log("i:",char);
    len++;
}

console.log("Length:",len);*/

// for-in

/*let student={
    name:"Anindita",
    age:21,
    cgpa:8.8,
    isTrue: "pass"
};

console.log("Student details:",student);
for(let i in student){
    console.log("i:",i);
    console.log("student[i]:",student[i]);
}*/

// even num found from 1 to 100
//p -1

/*let i;
for( i=0; i<=100;i++){
    if(i%2==0){
        console.log("Even num found at=",i)
    }
    console.log("Odd num found at=",i)
}
console.log("Total number=",i);*/

//p-2

// It's brain jamming game must recode it

/*let gamenum =98;

let usernum = prompt("Guess the game number: ");
console.log("User number:",usernum);

while(usernum !=gamenum){
    usernum = prompt("Guess again");
}

console.log("Congratulations on guessing right number");
*/

/*
let str = "Anindita";
console.log("str:",str);
console.log(str[3]);

// Template literals
let sentence = `Special type string`
console.log("sentence:",sentence);
console.log(typeof(sentence));

let obj = {
    item : "pencil",
    price : 12
}

let output = `Item name is ${obj.item} and price is ${obj.price} rupees`
console.log(output);


console.log("Item name is ",obj.item,"and price is ",obj.price,"rupees"); 
// expression can be calculated
console.log(`the string is ${1+2+5}`);  

console.log("Ana \t disuza")*/

// String methods

// method is like a block of code

/*let str = "Anindita";
console.log(str.toUpperCase());

// strings are immutable-> original sentence will not change but the new sentence will be created that can be changed

let str1 = "          Apna Duniya  aise  hi";
console.log(str1.trim());

// in trim  method only first and last space will be removed  but middle space will not be removed between the words

*/

/*let str = "Apna College"; 
let str1 = "Meri JaanJaan";
console.log(str.slice(0,4));// ending value will be non- inclusive
console.log(str.slice(0));

let res = str.concat(str1);
console.log(res);
console.log(str1.replaceAll("Jaan","Tera"));

console.log(str1.charAt(1)) // index value or char search


let str = 'I love js'
str = str.replace('I','JJ')
console.log(str) 
*/

// Excercise


// revision

/* let g_name = prompt("Enter the game name: ");
console.log(g_name)
console.log(`${g_name} is the game for children`)*/


// Arrays

/*let details_stud = {
    stud1_name : "Anindita",
    stud1_roll : 3,
    stud1_Address : "Kolkata"
};

console.log(details_stud);
console.log(details_stud.stud1_name);
console.log(details_stud["stud1_name"]);

*/

/*let marks = [10,20,30];
console.log(marks)
console.log(`Length is ${marks.length}`)// length is a property not a method
*/


/*let list =[1, 2, 3,4,5];
console.log(list.length);
for( let idx=0; idx< list.length; idx++){
    console.log(list[idx]);
}



// for of

for(let ele of list){
    console.log(ele);
}*/


/*
let marks = [85,97,44,37,76,60];
// average of marks
let total =0;
for (let num= 0; num<marks.length; num++){
total += marks[num]; // 399 /2 = 199.5
}

let avg = total/marks.length;
console.log(avg);


*/
/*
let price = [250,645,300,900,50];

for (let item= 0; item<price.length; item++){
    console.log(price[item]);
    let discount = price[item]*0.1;
    price[item] -= discount;
}

console.log(price);  

*/


// Array methods

/*
let drinks = ["beer","coffee","whisky","wine","vodka"];
console.log(drinks.toString());
drinks.push("rum");
console.log(drinks)

let cafe = ["Cafe CPX", "The Coffee shop", "Starbucks"];

let combine = drinks.concat(cafe);
console.log(combine);

cafe.unshift("Cafe Coffee Day");
console.log(cafe);

let cancel = cafe.shift();
console.log(cancel);


console.log(drinks.slice(1,3));


let variable = [1,2,3,4,5,6,7];
console.log(variable.splice(2,0,101));

// when i declare the element as a starting idx then deleted 0 element and 
// nextly i put 101 at 1st idx but surprisingly 101 placed in 1st idx and sitted between 2 and 3

let no = [1,2,3,4,5];
//no.splice(2,0,100,101);

// it's for deleting the elements
//no.splice(2,2);


// Replace the element
no.splice(2,1,100,101);
console.log(no);
*/



/*
let new_Companies = ["TCS","Infosys","Wipro","HCL","Tech Mahindra"];
new_Companies.splice(2,1,"Accenture","Cognizant");
console.log(new_Companies);
*/

// Revision

/*
function countVowels(str){
    let count =0;
    for(let char of str){
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
            count++;
        }
    }
    
    console.log("Total vowels are:",count);
    
    return count;
}

const ArrowcountVowels = (str) => {
    let count =0;
    for(let char of str){
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
            count++;
        }
    }
    
    console.log("Total vowels are now :",count);
    
    return count;
}
    */

// Important concepts

//Q2

/* let mode = document.querySelector("#btn");
let body = document.querySelector("body");

let currentMode = "light";

mode.addEventListener("click", () => {
    if(currentMode === "light"){ // removed the extra space
        currentMode = "dark";
        //document.body.style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currentMode = "light";
        
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currentMode);
});
 */


/* const student = {
    fullName : "Ana",
    job : "Software Engineer",
    age : 21,
    printAge : function(){
        console.log(`${this.fullName} is ${this.age}`);

    }
} */


   /*  const employee ={
        calcTax(){
            console.log("Calculating tax...");
        },
    };

    const KaranAhuja ={
        salary : 60000,
        calcTax(){
        console.log("Tax rate for you is 20%");
        },
    };

    const kriti = {
        salary : 80000,
        
    };

    kriti.__proto__ = employee; */

    // objects and classes 

     /* class ToyotaCar{
        constructor(millage,brandName){
            this.millage = millage;
            this.brandName = brandName;
        }
        start(){
            console.log("Car started");
         }  
        
        stop(){
            console.log("Car stopped");
        }

        setBrand(brand){
            this.brandName = brand;
        }
    }
 let fortuner = new ToyotaCar(24,"Fortuner"); */
 
 
/* class Student{
    constructor(name,age,job){
    this.name = name;
    this.age = age;     
    this.job = job;
    }

    intro(){
   console.log(`Hello, myself ${this.name} `)
    }
}

const s1 = new Student("Anindita",21,"Software Engineer"); */

/* 
class person{
    constructor(name){
        this.species = "Homo sapiens";
        this.name = name;
        console.log("Enter parent constructor");
    }
    eat(){
        console.log("Eating...");
    }
    
}

class Engineer extends person{
    constructor(name){
        console.log("Enter child constructor");
        super(name); // to invoke parent class constructor
        
        console.log("Exit child constructor");
    }
    work(){
        super.eat();
        console.log("Working on something new                                                                                                           ");
    }
}

let anindita = new Engineer("Ana"); */
/* 
let data = "secret info";
class user {
   constructor(name,email) {//properties
      this.name = name;
      this.email= email;
}

    viewData(){
        console.log("data = ",data);
    }
}

class student extends user{
    marks(){
        console.log("calculating marks..")
    }
}

class teacher extends user{
    constructor(name, sub){
        super(name);
        this.sub =sub;
    }
    teach(){
        console.log("proficient in sst");
    }
}

let a1 = new teacher("Anindita","SST"); */

/* function sum(a,b){
    console.log(a+b)
}

function calc(a,b,sumcallback){
    sumcallback(a,b);
}

calc(4,8,sum);
 */


/* const greet = (name,callback) =>{
    console.log("my name is "+ name);
    callback();
}

const bye = () =>{
    console.log("Bye");
}

console.log(greet("Siya",bye)); */


// suppose we had created a database and we are trying to fetch data

//Promise
let  promise = new Promise ((resolve, reject) =>{
    console.log("I kept promises")
    resolve("Success");
});

function getData(dataId, getnextData){
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
        console.log("data",dataId);
        resolve("Success");// after returning the value it will resolve
        if(getnextData){
            getnextData();
        }
        
    }, 3000);
    })
}



/* function getData (dataId, getnextData){
    setTimeout(() => {
        console.log("data",dataId);
        if(getnextData){
            getnextData();
        }
        
    }, 3000);
}


getData(1, () =>{
    console.log("Getting data 2...")
    getData(2, () => {
        console.log("Getting data 3...")
        getData(3);
    });
});
 */

