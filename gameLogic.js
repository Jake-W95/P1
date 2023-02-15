
const shuffle = require('./shuffleFunc');
const deal = require('./dealFunc');
const round = require('./round');

class Card {
    constructor(name, strength, speed, height, weight) {
        this.name = name
        this.strength = strength;
        this.speed = speed;
        this.height = height;
        this.weight = weight;

    }
    
}

let ch1 = new Card('Steve', 100, 48, 180, 100);
let ch2 = new Card('Lucy', 91, 60, 185, 69);
let ch3 = new Card('Simone', 150, 80, 60, 200);
let ch4 = new Card('Marcus', 200, 105, 82, 30);


function startGame() {
    const deck = [ch1, ch2, ch3, ch4];
            // Results in 2 hands, shuffled
    const hands = deal(shuffle(deck));

    const hand1 = hands[0]
    const hand2 = hands[1]
    round(hand1, hand2)

    
}


startGame()






