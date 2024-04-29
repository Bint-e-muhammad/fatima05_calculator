#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter first number",
        type: "number",
        name: "firstNumber",
    },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to performs operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "Multiplication", "Division", "module"],
    },
]);
// conditional statement..
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "module")
    console.log(answer.firstNumber ** answer.secondNumber);
