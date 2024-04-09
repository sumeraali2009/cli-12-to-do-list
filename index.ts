#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([{ message: "Enter first number", type: "number", name: "firstnumber" },
{ message: "Enter second number", type: "number", name: "secondnumber" },
    {message: "select one of the operatorsto perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "substraction", "multiplication", "division"],
},
]);
//conditional statement

if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "substraction") { 
    console.log(answer.firstnumber - answer.secondnumber)
} else  if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "division"){
    console.log(answer.firstnumber / answer.secondnumber);
}  else {   
console.log("please select valid operator")
}
