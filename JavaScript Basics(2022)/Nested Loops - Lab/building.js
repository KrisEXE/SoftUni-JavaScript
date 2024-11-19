function building(a,b){
    let floors = Number(a)
    let rooms = Number(b)

    for(let x = floors; x > 0; x--){
        let buff = ''
        for(let y = 0; y < rooms; y++){
            if(x === floors){
                buff += `L${x}${y} `
            } else if(x % 2 === 0) {
                buff += `O${x}${y} `
            } else {
                buff += `A${x}${y} `
            }
        }
        console.log(buff);
    }
     
      
}
building(6,

4)