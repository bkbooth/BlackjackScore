/**
 * Create BlackjackCard object
 *
 * @throws {Error}
 *
 * @constructor
 */
function BlackjackCard(card) {
    if (!BlackjackCard.isValid(card)) {
        throw new Error(card + ' is not a valid card');
    }

    this.__card = card;
}

/**
 * Get the numerical value of a valid Blackjack card
 *
 * @returns {number}
 */
BlackjackCard.prototype.getValue = function __getValue() {
    var cardValueRegexp = /^(10|[2-9AJQK])/i,
        cardValue = (cardValueRegexp.exec(this.__card)[0]) // Card already validated, can assume there will be a match
            .replace(/[JQKjqk]/, '10')                     // Replace 'J', 'Q' or 'K' with '10';
            .replace(/[Aa]/, '11');                        // Replace 'A' with '11' or '1'

    return Number(cardValue);                              // Cast value as Number
};

/**
 * Check if card is a valid Blackjack card
 *
 * @param {string} card
 *
 * @returns {boolean}
 */
BlackjackCard.isValid = function __isValid(card) {
    var validRegexp = /^10|[2-9AJQK][CDHS]$/i;

    return typeof card === 'string' && validRegexp.test(card);
};

// Export if using Node.js
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = BlackjackCard;
}
