function travelling(input){
    let index = 0
    let command = input[index]
  
    while(command !== 'End')
    {
        let dest = input[index]
        index++
        let moneyNeeded = input[index]
        index++
        let moneyOnHand = 0;
        while(command !== 'End')
        {
            moneyOnHand += Number(input[index])
            if(moneyOnHand >= moneyNeeded){
                console.log(`Going to ${dest}!`)
                index++;
                break;
            }
            index++
            
        }
    }
}
travelling(["Greece",

    "1000",
    
    "200",
    
    "200",
    
    "300",
    
    "100",
    
    "150",
    
    "240",
    
    "Spain",
    
    "1200",
    
    "300",
    
    "500",
    
    "193",
    
    "423",
    
    "End"])