function sumOfTwoNumber(a, b, c) {
    let start = Number(a)
    let end = Number(b)
    let magicNum = Number(c)
    let isFound = false
    let counter = 0;

    for (let x = start; x <= end; x++){
        for (let y = start; y <= end; y++){  
                counter++
                if(x + y === magicNum){
                    console.log(`Combination N:${counter} (${x} + ${y} = ${magicNum})`)
                    isFound = true;
                    break;
                }  
            }
            if(isFound){
                break;
            }
        
    }
    if (!isFound){
        console.log(`${counter} combinations - neither equals ${magicNum}`)
    }
    
}

sumOfTwoNumber(1,

10,

5)