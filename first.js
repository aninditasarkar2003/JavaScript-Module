
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

let gamenum =98;

let usernum = prompt("Guess the game number: ");
console.log("User number:",usernum);

while(usernum !=gamenum){
    usernum = prompt("Guess again");
}

console.log("Congratulations on guessing right number");