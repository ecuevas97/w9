// What do we need for a War car game?

/** 
 * Deck
 * - 52 cards (Should each card be its own class? should it be an object with 3 values?)
 *  - Rank("name value")
 *  - Suit (hear/spade/club/dimond)
 *  - Values
 * - a way to shuffle
 * - a way to pass the cards to the players (should this be in my deck? or my game logic?)
 * 
 * Players (do I need a player class? or can i just put it in my game logic?)
 * - Name?
 * - Score
 * - Hand
 * 
 * Logic to actually play the game...we can use a Deck in any card game,
 *  but we're playing a specific one.
 *  - ways to compare the cards... number values on each card
 */

//Deck Class
/** Should have:
 *   An array to store all the cards
 *   An array to store all the cards ranks
 *   An array to store all the cards suits
 */

class Deck {
    constructor() {
        this.deck = [];
        this.ranks = ['A','2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.suits =["Hearts ♥", "Diamonds ♦", "Clubs ♣", "Spades ♠"]
    }

    // A method to create a deck... iterate over ranks/ suits
    // push a new card... (as an object) into our constructors this.deck

    createDeck() {
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.ranks.length; j++) {
                let card = {
                    name: `${this.ranks[j]} of ${this.suits[i]}`,
                    value: j + 1 
                }

                this.deck.push(card) 

                 console.log()
            }
        }
    }
    
    shuffleDeck() {
        
    }
}

const deck = new Deck
deck.createDeck()
console.log(deck.deck)