//1.The switch statement allows to make a decision from the number of choices.
function marksgrade()
{
grade = document.form1.text1.value;
switch (grade)
{

case 'A':
console.log("Excellent<br />");
break;
case 'B+':
console.log("Welldone<br />");
break;
case 'B':
console.log("Good job<br />");
break;
case 'C':
console.log("Pretty good<br />");
break;
case 'D':
console.log("Not so good<br />");
break;
case 'E':
console.log("Failed<br />");
break;
default:
console.log("Wrong grade.........");
}
}
marksgrade();
//2.The break statement is used to terminate a loop, switch or label statement.
function w3rfunction(){
    'use strict';
    var x = document.getElementById("number").value;
    if(x < 2 || x > 10){
    document.getElementById("result").innerHTML = "The number is not within the range.";
    }
    else
    {
    var z = 0;
    var y;
    for(y=1; y<=x; y++)
    {
    z = z + y;
    if(y===x)
    {
    break;
    }
    }
    document.getElementById("result").innerHTML = 'The sum of numbers between  1 to '+ x +' is: '+ z;
    }
    }
    //3.The while loop is to execute a statement or code block repeatedly as long as an expression is true. Once the expression becomes false, the loop terminates.
    var x = 1;
var y = 0;
var z = 0;
document.getElementById("result1").innerHTML = "List of numbers : ";
while (x <=10 )
{
z = x %  2;
if (z !== 0)
{
var newParagraph4 = document.createElement("p");
var newText4 = document.createTextNode(x);
newParagraph4.appendChild(newText4);
document.body.appendChild(newParagraph4);
y=y+x;
}
x++;
}
var newParagraph4 = document.createElement("p");
var newText4 = document.createTextNode("The sum of even numbers between 0 to 10 is : " + y);
newParagraph4.appendChild(newText4);
document.body.appendChild(newParagraph4);
const type=typeof "John"   
console.log("Type of John is: "+type);
const type1=typeof 3.14        
console.log("Type of 3.14 is: "+type1);          
const type2=typeof NaN  ; 
console.log("Type of NAN is: "+type2);               
const type3=typeof false ;
console.log("Type of false is: "+type3);   
//4.this  keyword refers to an object

const person = {
    firstName: "Brigit",
    lastName: "Lincoln",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
    
  };  
  const person1=document.getElementById("demo").innerHTML = person.fullName(); 
  console.log(person1);
             
  //5.try  defines a code block to run (to try).
  try {
    adddlert("Welcome guest!");
  }
  //6.catch statement defines a code block to handle any error.
  catch(err) {
    document.getElementById("demoTry").innerHTML = err.message;
  }
//7.for in statement loops through the properties of an Object:
//8.for loops through a block of code a number of times
// 9.do/while loops through a block of code while a specified condition is true
//10. Boolean take the values true or false.
//11. void specifies an expression to be evaluated without returning a value.
//12. final modifier is used to declare variables as always retaining the same value or reference
// 13.function is a block of code designed to perform a particular task.
//14.instanceOf tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object.
//15. public : members of the class and available to everyone that can access the (owner) class instance