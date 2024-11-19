function main(input){
    let month = input[0]
    let amount = Number(input[1])
    let priceStudio = 0
    let priceApartment = 0
    let discount = 0
    switch (month){
        case 'May':
        case 'October':
            priceStudio = 50
            priceApartment = 65
            if( amount > 7 && amount <=14)
            {
                priceStudio = amount * (50 - (50 * 0.5))
                priceApartment = amount * 0.65
            } else if(amount > 14) {
            priceStudio = amount * (50 - (50 * 0.3))
            priceApartment = amount * (65 - (65 * 0.1))

            } else
            {
                priceStudio = amount * 50
                priceApartment = amount * 65
            }

        break;
        case 'June':
        case 'September':
            priceStudio = 75.20
            priceApartment = 68.70
            if (amount > 14) {
                priceStudio = amount * (75.20 - (50 * 0.2 ))


            } else {
                priceStudio = amount * 75.20
                priceApartment = amount * 68.70
            }
        break;
        case 'July':
        case 'August':
            priceStudio = 76
            priceApartment = 77
            if (amount > 14){
                priceStudio = amount * 76
                priceApartment = amount * (77 - (77 * 0.1))
            }
            break;
            default:
                break;

    }
    
    console.log(`Apartment: ${priceApartment.toFixed(2)}lv`)
    console.log(`Studio: ${priceStudio.toFixed(2)}lv`)
}
main (["May",

    "15"])