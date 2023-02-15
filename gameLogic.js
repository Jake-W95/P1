class Card{
    constructor(name, strength, speed, height, weight){
        this.name = name
        this.strength = strength;
        this.speed = speed;
        this.height = height; 
        this.weightc= weight;
    }
}
const hand1 = [];
const hand2 = [];

let ch1 = new Card('Steve',100,48,180,100);
let ch2 = new Card('Lucy', 91,60,185,69);
let ch3 = new Card('Simone', 150, 80, 60, 200);
let ch4 = new Card('Marcus',200, 105, 82, 30);

const deck = [ch1, ch2,  ch3, ch4];


function deal () {
    for(C of deck){
        if(hand1.length <= hand2.length){
            hand1.push(C)
        } else {
            hand2.push(C)
        }
    }

console.log(hand1)
}





deal()