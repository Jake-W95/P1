const shuffle = require('./shuffleFunc');
const deal = require('./dealFunc')

class Card{
    constructor(name, strength, speed, height, weight){
        this.name = name
        this.strength = strength;
        this.speed = speed;
        this.height = height; 
        this.weightc= weight;
    }
}


let ch1 = new Card('Steve',100,48,180,100);
let ch2 = new Card('Lucy', 91,60,185,69);
let ch3 = new Card('Simone', 150, 80, 60, 200);
let ch4 = new Card('Marcus',200, 105, 82, 30);

const deck = [ch1, ch2,  ch3, ch4];

// shuffle(deck)
deal(deck)






