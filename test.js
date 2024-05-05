import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta('WELCOME'));
let totalAmount = 10000;
let myPin = 1122;
let message1 = chalk.green("please select a method to perform the action");
let message2 = chalk.green(' please enter the withdraw amount');
let message3 = chalk.green('enter the PIN');
let message4 = chalk.green('please select an amount');
let message5 = chalk.red.bold('Insufficient balance');
let userInput1 = await inquirer.prompt({
    name: 'methodSelection',
    type: 'list',
    message: message1,
    choices: ['Withdraw cash',
        'Check account balance',
        'instant select']
});
async function performingAction() {
    if (userInput1.methodSelection === 'Withdraw cash') {
        let userInput2 = await inquirer.prompt({
            name: "withdrawAmount",
            type: 'number',
            message: message2
        });
        if (userInput2.withdrawAmount <= totalAmount) {
            let userInput3 = await inquirer.prompt({
                name: 'enteringPIN',
                type: 'password',
                message: message3
            });
            if (userInput3.enteringPIN == myPin) {
                console.log(chalk.magentaBright('DONE'));
                console.log(chalk.green.bold(`your remaining balance is ${totalAmount - userInput2.withdrawAmount}`));
            }
            else {
                console.log(chalk.red('incorrect PIN'));
            }
        }
        else if (userInput2.withdrawAmount > totalAmount) {
            console.log(message5);
        }
        else {
            console.log(chalk.red.bold('please enter a amount in digit'));
            performingAction();
        }
    }
    else if (userInput1.methodSelection === 'Check account balance') {
        let userInput4 = await inquirer.prompt({
            name: "checkBalance",
            type: 'password',
            message: message3
        });
        if (userInput4.checkBalance == myPin) {
            console.log(chalk.green.bold(`your balance is ${totalAmount}`));
        }
        else {
            console.log(chalk.red('incorrect PIN'));
        }
    }
    else if (userInput1.methodSelection === 'instant select') {
        let userInput5 = await inquirer.prompt([{
                name: 'instantSelection',
                type: 'list',
                message: message4,
                choices: [50000, 25000, 10000, 5000, 2500, 1000, 500]
            }
        ]);
        if (userInput5.instantSelection <= totalAmount) {
            let userInput6 = await inquirer.prompt({
                name: "enterPIN",
                type: 'password',
                message: message3
            });
            if (userInput6.enterPIN == myPin) {
                console.log(chalk.magentaBright('DONE'));
                console.log(chalk.green.bold(`your remaining balance is ${totalAmount - userInput5.instantSelection}`));
            }
            else {
                console.log(chalk.red('incorrect PIN'));
            }
        }
        else {
            console.log(message5);
        }
    }
}
performingAction();
