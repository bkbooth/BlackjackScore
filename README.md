# Blackjack Score

Calculate the Blackjack score of two input cards.

This is a coding test for a prospective employer. 

## Brief

Write a program which accepts two inputs, representing two playing cards out of a standard 52 card
deck. Add these two cards together to produce a blackjack score, and print the score on the screen
for the output.

Cards will be identified by the input, the first part representing the face value from 2-10, plus A,
K, Q, J. The second part represents the suit S, C, D, H.

The blackjack score is the face value of the two cards added together, with cards 2-10 being the
numeric face value, and A is worth 11, and K, Q, J are each worth 10.

## Notes

I have imposed two extra rules to make the example more inline with Blackjack rules:

* Both cards cannot be the same
* If both cards are aces (A), only one will be used as a high ace (11), the other will be a low ace (1)

This program will run in both Node.js and a browser environment.

### Node.js

Simply run `$ node score 2C AH`. Run `$ node score --help` to see the usage instructions

### Browser

Open `index.html` in a browser

### Tests

Run `$ npm test`
