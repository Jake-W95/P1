const inquirer = require('inquirer');

function round(hand1, hand2) {
    var i = 0;
    var j = 0;
    function play() {
        if(j === 8){
            return console.log('GAME OVER: YOU LOST')
        }
        if(i === 8){
            return console.log('YOU WON')
        }
        console.log('i = ' + i, 'j = ' + j)
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

        function wonRound() {
            console.log('You win this card: ' + hand2[j].name);
            hand1.splice(i++, 0, hand2.splice(j--, 1));
            console.log(`You now have ${hand1.length} cards`)
            //  'hand1 ' + hand1, 'hand2 ' + hand2
             
            nextRound()
        }
        function lostRound() {
            console.log('You lose this card: ' + hand1[i].name);
            hand2.splice(j++, 0, hand1.splice(i--, 1));
            console.log(`You have ${hand1.length} cards remaining`)
            //  'hand1 ' + hand1, 'hand2 ' + hand2
             
            nextRound()
        }
        function nextRound() {
           
            if (i === hand1.length) {
                i = 0
            } else if (hand1.length == 0) {
                return console.log('You Lost')
            } else {
                i++
            }
            if (j === hand2.length - 1) {
                j = 0
            } else if(hand2.length === 0){
                return console.log('You Won')
            } {
                j++
            }
      

        }
        if (hand1.length > 0 && hand2.length > 0) {


            // console.log('H1 length: ' + hand1.length, 'H2 length: ' + hand2.length)
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