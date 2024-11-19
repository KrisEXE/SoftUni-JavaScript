function EvenPowersOf2(n){
      
    for(let i = 0; i <= n; i += 2){
        let res = Math.pow(2 , i)
        console.log(res)
    }

}
EvenPowersOf2(4)