function main(input){
    let budget = Number(input[0])
    let season = input[1]
    let fishermans = Number(input[2])
    let boatPrice = 0 ;
    switch(season){
        case 'Spring':
            boatPrice = 3000
            break;
        case 'Autumn':
        case 'Summer':
            boatPrice = 4200;
            break;
        case 'Winter':
            boatPrice = 2600;
            break;
    }
    if(fishermans <=6) {
        boatPrice = boatPrice * 0.90
    }  else if (fishermans >= 7 && fishermans <= 11)
    {
        boatPrice = boatPrice * 0.85
    } else  {
        boatPrice = boatPrice * 0.75
    } 
    if(fishermans % 2 === 0 && season !== Autumn){
        boatPrice = boatPrice * 0.95
    }


    let totalCost = Math.abs(budget - boatPrice);
    if(budget <= totalCost){
    console.log(`Yes! You have ${totalCost.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${totalCost.toFixed(2)} leva.`)
    }
    
}
main(["3000",

    "Summer",
    
    "11"])