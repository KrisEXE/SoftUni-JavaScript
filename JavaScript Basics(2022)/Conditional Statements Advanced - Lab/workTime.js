function main(input){
    let workHours = Number(input[0])
    let dayOfWeek = input[1]
   
    if (dayOfWeek === 'Sunday' || workHours < 10 || workHours >18){
        console.log('closed')
    } else {
        console.log('Open')
    }
    
}
main(["11   ",

    "Monday"])