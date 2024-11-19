function main(input){
    let typeFlower = input[0]
    let countFlower = Number(input[1])
    let budget = Number(input[2])

    let sum = 0 
    switch(typeFlower){
        case'Roses':
        sum = countFlower * 5
        if(countFlower > 80){
            sum = countFlower * 0.90
        }
        
        break;
        case'Dahlias':
        sum = countFlower * 3.80
        if(countFlower > 90){
            sum = countFlower * 0.85
        }
        
        break;
         case'Tulips':
         sum = countFlower * 2.80
         if(countFlower > 80){
             sum = countFlower * 0.85
         }
         
         break;
        case'Narcissus':
        sum = countFlower * 3
        if(countFlower < 120){
            sum = countFlower * 1.15
        }
        
        break;
        case'Gladiolus':
        sum = countFlower * 2.50
        if(countFlower < 80){
            sum = countFlower * 1.20
        }
        
         break;
        } 

        let diff = Math.abs(budget - sum)
         if(budget >= sum){
            console.log(`Hey, you have a great garden with ${countFlower} ${typeFlower} and ${diff.toFixed(2)} leva left.`)
          } else {
            console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
          }

}
main (["Roses",

    "55",
    
    "250"])


