#! /usr/bin/env node
import inquirer from "inquirer";
console.log(" 'Welcome to My ATM' \n");
let myBalance = 20000; //dollars
let pinCode = 1122;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "Plz Enter Your PinCode:",
        type: "number",
    }]);
console.log(pinAnswer.pin);
if (pinAnswer.pin == pinCode) {
    console.log("Pincode entered successfully!");
    let operationAnswer = await inquirer.prompt([{
            name: "operation",
            message: "What can we do do for you today?\nPlease select an option:",
            type: "list",
            choices: ["Withdrawl cash", "Balance inquiry", "Fast Cash"]
        }]);
    if (operationAnswer.operation == "Withdrawl cash") {
        let amountAnswer = await inquirer.prompt([{
                name: "amount",
                message: "Enter the amount:",
                type: "number"
            }]);
        if (amountAnswer.amount > myBalance) {
            console.log("Insufficient Balance! Please Enter Amount According to Your balance.");
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAnswer.operation == "Balance inquiry") {
        console.log(`Your balance is: ${myBalance}`);
    }
    else if (operationAnswer.operation == "Fast Cash") {
        let fastcashAns = await inquirer.prompt([{
                name: "cash",
                message: "Please select an amount to cash:",
                type: "list",
                choices: ["500", "1000", "5000", "10000"]
            }]);
        if (fastcashAns.cash == "500") {
            myBalance -= fastcashAns.cash;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        if (fastcashAns.cash == "1000") {
            myBalance -= fastcashAns.cash;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        if (fastcashAns.cash == "5000") {
            myBalance -= fastcashAns.cash;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        if (fastcashAns.cash == "10000") {
            myBalance -= fastcashAns.cash;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        else {
            console.log("please select from options only");
        }
    }
}
else {
    console.log("Sorry! Try Again. Invalid Pincode.");
}
