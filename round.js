

function round (hand1, hand2) {
    const roundQ = {
        name: 'round',
        message: 'Select stat',
        type: 'list',
        choices: ['name', 'strength', 'speed', 'height', 'weight']
    }

    console.log(hand1)
    if (hand1.length > 0 && hand2.length > 0){

        console.log(hand1[0])
        // inquirer.prompt(roundQ)
        // .then((res) => {
        
        //     console.log(res)
        
        // })
    }
}

module.exports = round