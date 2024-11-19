function main(input){

    let food = input[0]
    switch (food){
        case 'grapes':
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        console.log('Fruits'); break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'carrot':
        console.log('Vegetables'); break;
        default: console.log('Unknown')


    }

}
main(["blueberries"])