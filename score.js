var BlackjackCard = require('./BlackjackCard'),
    args = process.argv.slice(2);

/**
 * Output usage help message
 */
function helpMessage() {
    console.log(
        'Usage: node score card1 card2 \n' +
        'Cards take the form (VALUE)(SUIT) (without parens) and should be distinct\n' +
        'VALUE is 2-10, J (jack), Q (queen), K (king) or A (ace)\n' +
        'SUIT is C (clubs), D (diamonds), H (hearts) or S (spades)\n' +
        'Examples: 2C, 10H, AS, JD'
    );
}

// Show error and/or usage help message if input invalid
if (args.length === 1 && args[0] === '-h' || args[0] === '--help' || args[0] === 'help') {
    helpMessage();
    return;
} else if (args.length !== 2) {
    console.error('ERROR: Must input exactly two cards\n');
    helpMessage();
    return;
} else if (args[0] === args[1]) {
    console.error('ERROR: Input same card twice\n');
    helpMessage();
    return;
}

try {
    var card1 = new BlackjackCard(args[0]), // Will validate input card and throw Error
        card2 = new BlackjackCard(args[1]),
        card1Value = card1.getValue(),      // Gets card value, assumes all aces === 11
        card2Value = card2.getValue(),
        score = card1Value + card2Value;

    // Since we're only comparing two cards, if we score over 21 we know it was two aces,
    // One of the aces should be a low ace (value === 1)
    if (score > 21) {
        score -= 10;
    }

    console.log('Blackjack Score: ' + score);
} catch(error) {
    // Catch error creating BlackjackCards
    console.error('ERROR: ' + error.message + '\n');
    helpMessage();
}
