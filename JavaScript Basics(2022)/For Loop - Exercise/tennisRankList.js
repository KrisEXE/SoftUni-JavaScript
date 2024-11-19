function tennisRankList(input){
    let tournaments = Number(input[0]);
    let initialPoints = Number(input[1]);
    let pointsWon = 0;
    let winCount = 0;
    for (let i = 2; i < tournaments + 2; i++){
        let tournamentsResult = input[i]
        if (tournamentsResult === 'W'){
            pointsWon += 2000;
            winCount++;
        } else if (tournamentsResult === 'F'){
            pointsWon += 1200
        } else if (tournamentsResult === 'SF'){
            pointsWon += 720
        }   
    }
    let avgPoints = pointsWon / tournaments
    let winPercent = (winCount / tournaments) * 100
    console.log(`Final points: ${initialPoints + pointsWon}`)
    console.log(`Average points: ${Math.floor(avgPoints)}`)
    console.log(`${winPercent.toFixed(2)}%`)

}
tennisRankList(["4",

    "750",
    
    "SF",
    
    "W",
    
    "SF",
    
    "W"])