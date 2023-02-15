const inquirer = require('inquirer');

function round(hand1, hand2) {
    var i = 0;
    var j = 0;
    function play() {
        console.log(i, j)
        const roundU = {
            name: 'round',
            message: hand1[i].name,
            type: 'list',
            choices: [
                'Str: ' + hand1[i].strength,
                'Spd: ' + hand1[i].speed,
                'Hei: ' + hand1[i].height,
                'Wei: ' + hand1[i].weight
            ]
        };
        const roundAI = new Map([
            ['Str', hand2[j].strength],
            ['Spd', hand2[j].speed],
            ['Hei', hand2[j].height],
            ['Wei', hand2[j].weight]
        ]);

        function lostRound() {
            console.log('You lose this card')
            nextRound()
        }
        function wonRound() {
            console.log('You win this card')

            nextRound()
        }
        function nextRound() {
            if (i === hand1.length-1) {
                i = 0
            } else {
                i++
            }
            if (j === hand2.length-1) {
                j = 0
            } else {
                j++
            }
            // i === 
            // j === 

        }
        if (hand1.length > 0 && hand2.length > 0) {


            console.log(hand1.length, hand2.length)
            inquirer.prompt(roundU)
                .then((playerChoice) => {
                    const pAtt = playerChoice.round.slice(0, 3)
                    const pNum = parseInt(playerChoice.round.slice(5));

                    const aiNum = roundAI.get(pAtt)
                    console.log(hand2[j].name + ' ' + pAtt + ':' + aiNum)
                    //Win/Lose state
                    pNum > aiNum ? wonRound() : lostRound();
                    // console.log(i, j)
                    play()

                })

        }

    }

    play()

}


module.exports = round