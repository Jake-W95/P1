const inquirer = require('inquirer');

function round(hand1, hand2) {
    const roundQ = {
        name: 'round',
        message: hand1[0].name,
        type: 'list',
        choices: [
            'Str: ' + hand1[0].strength,
            'Spd: ' + hand1[0].speed,
            'Hei: ' + hand1[0].height,
            'Wei: ' + hand1[0].weight
        ]
    }
    const roundAI = new Map([
        ['Str', hand2[0].strength],
        ['Spd', hand2[0].speed],
        ['Hei', hand2[0].height],
        ['Wei', hand2[0].weight]
    ])
    if (hand1.length > 0 && hand2.length > 0) {
        inquirer.prompt(roundQ)
            .then((playerChoice) => {
                const pAtt = playerChoice.round.slice(0, 3)
                const pNum = parseInt(playerChoice.round.slice(5));
                
                const aiNum = roundAI.get(pAtt)
                console.log(hand2[0].name + ' ' +pAtt + ':' + aiNum)

                pNum > aiNum ? console.log('You win this card') : console.log('You lose this card')
                })
            } 
    }


module.exports = round