function main(input){
    let num = Number(input[0])
    if(num >= 100 && num <= 200 || num === 0){
        console.log('Valid number')
    } else {
        console.log('Invalid number')
    }
}
main(['0'])