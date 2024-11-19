function graduation(input){
    let index = 0; 
    let name = input[index];
    index++;
    
    let sumGrade = 0;
    let i = 1;
    
    
    let failCount = 0;
    let hasExcluded = false
    
    while(i <= 12){

        let grade = Number(input[index])
        index++

        if(grade < 4 ){
            failCount++
            if(failCount < 2){
                hasExcluded = true;
                console.log(`${name} has been excluded at ${i} grade`);
                break;
            }
            continue;

        }
        
        sumGrade += grade
        i++
        
    }
    if( !hasExcluded){
    let averageGrade = sumGrade / 12;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}
graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])