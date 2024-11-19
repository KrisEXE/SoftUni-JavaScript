function cleverLilly(age, washingMashinePrice, toyPrice){
    let savedMoney = 0
    let moneyGifted = 10
    
    

    for ( let i = 1 ; i <= age; i++){
        if (i % 2 === 0){
            savedMoney += moneyGifted - 1
            moneyGifted += 10 
        } else {
            savedMoney += toyPrice
        }
    }
   
    if(savedMoney >= washingMashinePrice){ 
        console.log(`Yes! ${(savedMoney - washingMashinePrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washingMashinePrice - savedMoney).toFixed(2)}`)
    }
  
    

}
cleverLilly (10,

170.00,

6)