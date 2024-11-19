function Oscars(actor, startingPts,judgesCount){

  
    for (let i = 3; i < judgesCount * 2; i += 2){
        let judgeName = input[i]
        let judgesPoints = Number(input[i + 1])

        let finalPts = judgeName.length * judgesPoints / 2;
        startingPts += finalPts
        if (startingPts > 1250.5){
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${startingPts.toFixed(1)}!`);
            
            break;
        } 
    }
    if (startingPts <= 1250.5){
        let pointsNeeded = 1250.5 - startingPts;
        console.log(`Sorry, ${actor} you need ${pointsNeeded.toFixed(1)} more!`);
    }


}
Oscars(["Zahari Baharov",

    "205",
    
    4,
    
    "Johnny Depp",
    
    "45",
    
    "Will Smith",
    
    "29",
    
    "Jet Lee",
    
    "10",
    
    "Matthew Mcconaughey",
    
    "39"])