function main(input){
    let budget = Number(input[0]); 
    let numberOfStatists = Number(input[1]);
    let costOfClothing = Number(input[2]);  

    let sumOfDecoration = budget * 0.1 
    let costOfFilm = numberOfStatists * costOfClothing

    if (numberOfStatists > 150)
    {
        costOfClothing = costOfClothing - (costOfClothing * 0.10)
    }
    let finalSum = sumOfDecoration + costOfFilm
    if(budget <  costOfFilm)
    {
         console.log("Not enough money!")
         console.log(`Wingard needs ${finalSum - budget } leva more.`)
    } else {

        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - finalSum).toFixed(2)} leva left.`);
    }







}
main(["20000",

    "120",
    
    "55.5"])