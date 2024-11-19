function clock(){
    let hoursToPrint = ''
    let minsToPrint = ''
    for( let h = 0 ; h <= 23; h++)
        for(let min = 0; min <= 59; min++){
        if ( h < 10){
            hoursToPrint = `0${h}`
        } else {
            hoursToPrint = `${h}`
        }
        
        if (min < 10){
            minsToPrint = `0${min}`; 
        } else {
            minsToPrint = `${min}`;
        }
        console.log(`${hoursToPrint}:${minsToPrint}`)
    }
}
clock()