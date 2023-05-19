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