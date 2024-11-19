function main(input){
    let animal = input[0]
    switch(animal){
        case 'dog': console.log('Mammal');
        break;
        case 'snake': console.log('reptile')
        break;
        default:  console.log ('unknown');
        break;

    }
}
main(["snake"])