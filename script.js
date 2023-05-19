//The switch statement allows to make a decision from the number of choices.
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
//The break statement is used to terminate a loop, switch or label statement.
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
    //The while loop is to execute a statement or code block repeatedly as long as an expression is true. Once the expression becomes false, the loop terminates.
    var x = 1;
var y = 0;
var z = 0;
document.getElementById("result").innerHTML = "List of numbers : ";
while (x <=10 )
{
z = x %  2;
if (z !== 0)
{
var newParagraph1 = document.createElement("p");
var newText1 = document.createTextNode(x);
newParagraph1.appendChild(newText1);
document.body.appendChild(newParagraph1);
y=y+x;
}
x++;
}
var newParagraph1 = document.createElement("p");
var newText1 = document.createTextNode("The sum of even numbers between 0 to 10 is : " + y);
newParagraph1.appendChild(newText1);
document.body.appendChild(newParagraph1);
//
var r = 0;
var z = 0;
for (r = 1; r<11; r++) {
z = z + r;
var newParagraph = document.createElement("p");
var newText = document.createTextNode(r+' ---> '+z);
newParagraph.appendChild(newText);
document.body.appendChild(newParagraph);
}

    