function main(input){
    let typeProjection = input[0]
    let numberRows = Number(input[1])
    let numberColumns = Number(input[2])
    let income = 0
    if(typeProjection === 'Premiere')
    {
        income =  numberRows * numberColumns * 12.0
    } else if (typeProjection === 'Normal'){
        income =  numberRows * numberColumns * 7.50
    } else if(typeProjection = 'Discount'){
        income =  numberRows * numberColumns * 5.00
    }
    console.log(`${income.toFixed(2)} leva`)
}
main(["Discount", "12", "30"]);