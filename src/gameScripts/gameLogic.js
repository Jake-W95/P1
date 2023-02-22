// const round = require('./round');

////////////////////////////////////////////////////////////// INITIALISE GAME
function shuffleDeal() {
    // ALL DRIVER DATA 
    // const driverData = require('../driver-data.json')
    
    /////////////////////////////////////////////////////////////// FUNCTIONS
    // FUNCTION SHUFFLING ARRAY (deck) ORDER
    const shuffle = require('./shuffleFunc');
    
    // FUNCTION DEALING CARDS TO 2 HANDS
    const deal = require('./dealFunc');
    
    // GAMEPLAY

    // FULL LIST OF CARDS/DRIVERS USED
    const deck = require('../driver-data.json');
    // console.log(deck[0].name)
    // 'hands' BECOMES AN ARRAY CONTAINING 2 HANDS FROM A SHUFFLED 'deck'
    const hands = deal(shuffle(deck));
    
    // const hand1 = hands[0]  //USER'S HAND
    // const hand2 = hands[1]  //AI'S HAND
    // console.log(hand2[0])
    // round(hand1, hand2)
    return hands

    // console.log(hands[0][0].name)
}
shuffleDeal()


export default shuffleDeal





// DRIVER CARDS CLASS

// CLASS NOT NECESSARY, DRIVERS ARE ALREADY OBJECTS 
// class Card {
//     constructor(driverID, name, experience, teamRanking, wins, podiums, championships, rating, driverNum) {
//         this.driverID = driverID /*API DRIVER NUMBER*/
//         this.name = name /*NAME FOR DISPLAY */
//                 // IN GAME ATTS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//         this.experience = experience                                                                 /*\\\\\\\\\\\\\\*/
//         this.teamRanking = teamRanking                                                               /*\\\\\\\\\\\\\\*/
//         this.wins = wins                                                                             /*\\\\\\\\\\\\\\*/
//         this.podiums = podiums                                                                       /*\\\\\\\\\\\\\\*/
//         this.championships = championships                                                           /*\\\\\\\\\\\\\\*/
//         this.rating = rating                                                                         /*\\\\\\\\\\\\\\*/
//                 // END OF IN GAME ATTS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//         this.driverNum = driverNum /*DRIVER # FOR DISPLAY*/ 
//     }
// }

// OLD DUMMY DATA
// let ch1 = new Card('Steve', 100, 48, 180, 100);
// let ch2 = new Card('Lucy', 91, 60, 185, 69);
// let ch3 = new Card('Simone', 150, 80, 60, 200);
// let ch4 = new Card('Marcus', 200, 105, 82, 30);
// let ch5 = new Card('Thomas', 60, 140, 95, 90);
// let ch6 = new Card('April', 173, 190, 120, 140);
// let ch7 = new Card('Alice', 74, 200, 52, 145);
// let ch8 = new Card('Callum', 210, 120, 140, 175);