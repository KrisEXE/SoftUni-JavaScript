function accountBalance(input){
    let index = 0;
    let account = 0;

    let command = input[index]
    index++

    while( command != 'NoMoreMoney')
    {
        let money = Number(command)
        

        if(money < 0){
            console.log("Invalid operation!")
            break;
        }
        console.log(`Increase: ${money}`)
        account += money

        command = input[index]
        index++
        
    }
    console.log(`Total:${account.toFixed(2)}`)

}
accountBalance(["5.51",

    "69.42",
    
    "100",
    
    "NoMoreMoney"])