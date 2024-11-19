function main(input){
    let budget = Number(input[0])
    let season = input[1]

    let destination = ""
    let stayingIn = ""
    let spentMoney = 0
    
    if(budget <= 100){
        destination = 'Bulgaria'
        if(season === 'summer'){
            stayingIn = 'Camp'
            spentMoney = budget * 0.3
        } else if (season ==='winter'){
            stayingIn = 'Hotel'
            spentMoney = budget * 0.7
        }
    }
    else if (budget > 100 && budget <= 1000)
        {
            destination = "Balkans"
            if (season === "summer")
            {
                stayingIn = "Camp"
                spentMoney = budget * 0.4
            }
            else if (season === "winter")
            {
                stayingIn = "Hotel"
                spentMoney = budget * 0.8
            }
        }
        else
        {
            destination = "Europe"
            stayingIn = "Hotel"
            spentMoney = budget * 0.9
        }
    console.log(`"Somewhere in ${destination}`)
    console.log(`${stayingIn} - ${spentMoney.toFixed(2)}`)
}
main(["50", "summer"]);