function deal(deck) {
    const hand1 = [];
    const hand2 = [];

    for (C of deck) {
        if (hand1.length <= hand2.length) {
            hand1.push(C)
        } else {
            hand2.push(C)
        }
    }
    // console.log(hand1, '1', hand2, 'h2')
    return [hand1, hand2]
}

module.exports = deal