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

module.exports = deal