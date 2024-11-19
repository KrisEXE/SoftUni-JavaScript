function main(input) {
    let hoursExam = Number(input[0])
    let minExam = Number(input[1])
    let hourOfComing = Number(input[2])
    let mineOfComing = Number(input[3])

    let timeExam = hoursExam * 60 + minExam
    let timeArrive = hourOfComing * 60 + mineOfComing
    if (timeExam > timeArrive) {
        console.log('Late')
        let diff = Math.abs(timeArrive - timeExam)
        if (diff < 60) {
            let minutes = diff % 60

            console.log(`${minutes} minutes before the star`)
        } else {
            let hours = Math.floor(diff / 60)
            let minutes = diff % 60
            if(minutes < 10){
                console.log(`${hours}:0${minutes.toFixed(2)} hours before the star`)
            } else {
                console.log(`${hours}:${minutes.toFixed(2)} hours before the star`)
            }
        }
    } else if (timeArrive <= timeExam && timeExam - timeArrive <= 30) {
        console.log('On Time')
        let diff = Math.abs(timeArrive - timeExam)
        if(diff > 0){
            let minutes = diff % 60
            console.log(`${minutes}minutes after the star`)
        }
    } else {
        console.log('Early')
        let diff =  Math.abs(timeArrive - timeExam)
        if(diff < 60){
            let mins = diff % 60 
            console.log(`${mins} minutes before the start`)
        } else {
            let h = Math.floor(diff / 60)
            let min = diff % 60
            if(min < 10){
                console.log(`${h}:0${min} hours before the start`)
            } else {
                console.log(`${h}:${min} hours before the start`)
            }

        }
    }

}
