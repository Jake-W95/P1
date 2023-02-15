const inquirer = require('inquirer');


function round (hand1, hand2) {

const characterName = hand1[0].name;
// const characterStrength = ;


    const roundQ = {
        name: 'round',
        message: characterName,
        type: 'list',
        choices: [
            'strength: ' + hand1[0].strength,
            'speed: ' + hand1[0].speed,
            'height: ' + hand1[0].height,
            'weight: ' + hand1[0].weight        ]
    }
    console.log(hand1)
    if (hand1.length > 0 && hand2.length > 0){

        // console.log(hand1[0])
        inquirer.prompt(roundQ)
        .then((res) => {
        
            console.log(res)
        
        })
    }
}

module.exports = round