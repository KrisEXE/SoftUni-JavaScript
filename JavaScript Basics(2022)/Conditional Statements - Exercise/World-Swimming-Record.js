function WorldSwimmingRecord(input){
    let currentRecord = Number(input[0]);
    let distanceInM = Number(input[1]);
    let timeForOneM = Number(input[2]);

    let time = distanceInM * timeForOneM;
    let slowTime = Math.floor(distanceInM / 15);
    time = time + (slowTime * 12.5);
   
    if (time < currentRecord){
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    } else {
        let diff = time - currentRecord; 
        console.log(`No, he failed! He was ${diff} seconds slower.`);
    }
}
WorldSwimmingRecord(["55555.67","3017","5.03"])