function main(input){
    let gender = input[0];
    let age = Number(input[1]);
    if (gender == 'f'){
     if(age < 16) {
         console.log('Miss.');
    }  else {
        console.log('Ms');  
    }     
    } else if(gender ==='m'){
        if(age < 16){
            console.log('Master')
        } else {
            console.log('Mr')
        }
    }
    
}


main(["m",

    "27"])