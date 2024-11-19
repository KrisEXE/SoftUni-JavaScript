function main(input){
    let serialName = input[0]
    let episodeLength = Number(input[1])
    let breakLength = Number(input[2])
    let timeleft= breakLength - breakLength * 0.375
    
    
    if (timeleft >= episodeLength)
        {
            console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(timeleft - episodeLength)} minutes free time.`);
        }
        else
        {
            console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(episodeLength - timeleft)} more minutes.`);
        }
    }





main(["Game of Thrones",

    "55",
    
    "160"])
