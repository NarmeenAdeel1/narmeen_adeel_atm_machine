#! /usr/bin/env node

import inquirer from "inquirer"

let mybalance = 50000; //Dollar
let mypin = 12345;


let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number"

        }
    ]
);

/// 12345 === 1234 = false
 if (pinAnswer.pin === mypin)
{console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt(
    [
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance","fast cash"]
        }
    ]
 );
 console.log(operationAns);

if (operationAns.operation === "withdraw") 
   { 
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]
        );


        /// =, -=, += // operators
                if (amountAns.amount > mybalance)
       { console.log("INSUFFICIENT BALANCE");
}
        
      else  mybalance -= amountAns.amount;
        { console.log("your remaining balance is:" + mybalance);
}


       
    }
 

    else if (operationAns.operation === "fast cash") 
            
{                  let fastcash = await inquirer.prompt(
                      [
                          {
                              name: "fastcash",
                              message: "please select amount",
                              type: "list",
                              choices: ["5000", "10000", "20000", "40000"]
                          }
                      ]
                  ); 
                  let selectedamount = parseInt(fastcash.fastcash);

                  //subtracted the selected amount from my balance
                  mybalance -= selectedamount;

                  //display the remaining amount 
                  console.log("your remaining amount is:" + mybalance );
                
                }
              
    
    else if (operationAns.operation === "check balance") {
        console.log("your balance is :" + mybalance
        )
    }
}

 else 
{console.log("INVALID PINCODE");
}

