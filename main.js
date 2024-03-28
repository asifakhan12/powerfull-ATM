#! /usr/bin/env node
import inquirer from "inquirer";
let yourBalance = 1000;
let myPin = 1234;
let pinResult = await inquirer.prompt({
    name: "pin",
    message: "Enter your Pin :",
    type: "number"
});
if (pinResult.pin === myPin) {
    console.log("your pin is correct !");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option :",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt({
            name: "Amount",
            message: "Please Select Amount :",
            type: "number"
        });
        yourBalance -= amountAns.Amount;
        console.log("your remaining balance " + yourBalance);
    }
    else {
        console.log("your balance is " + yourBalance);
    }
}
else {
    console.log("your pin no is invalid");
}
