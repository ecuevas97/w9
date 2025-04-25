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
        // Fisher-Yates shuffle algorithm
        for (let i = this.deck.length - 1; i > 0; i--) {
        // Generate random index between 0 and i
         const j = Math.floor(Math.random() * (i + 1));
        // Swap elements at positions i and j
         [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
      

    }
  }
}

//Class for a GAme (Specifically our WAR game)
/** Needs:
 * - A deck... instantiate a new Deck inside our Game class
 * 
 * - Create the deck, shuffle the deck, and pass the deck...
 * 
 * - Logic to play the game 
 *  - Turn based, how many terns?
 *  - Do our players have a hand yet?
 *  - Conrol flow statement logic to decide who wins?
 * 
 * - 2 players 
 *  - Hand
 *  - Score
 *  - Name 
 */
class Game {
    constructor() {
        this.player1 = {
            name: 'Player 1',
            score: 0,
            hand: []
        }
        this.player2 = {
            name: 'Player 2',
            score: 0,
            hand: []
        }
    }
 
    //Method to play the game 
    /**
     * Pass out cards to our players
     * Take x amount of turns...
     * as long as players have cards (or the number of cards they have)
     * Award Points based on card.value
     * Log the winner
     */
    playGame(){
        //instantiate a new deck, create a deck, then suffle the deck
        const deck = new Deck
        deck.createDeck()
        deck.shuffleDeck()

        while (deck.deck.length !==0){
            this.player1.hand.push(deck.deck.shift())
            this.player2.hand.push(deck.deck.shift())
        }
        
        // Actually playing the game... how many turns do I need?

        for(let i = 0; i < this.player1.hand.length; i++) {
            // Conditional logic to award points based on comparing the card values
            if(this.player1.hand[i].value > this.player2.hand[i].value){
                        //2               >         12
             this.player1.score ++
             console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Player 1 wins a point!
                Current score: p1: ${this.player1.score}, p2: ${this.player2.score}
                `)
            } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
                this.player2.score ++
             console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Player 2 wins a point!
                Current score: p1: ${this.player1.score}, p2: ${this.player2.score}
                `)
            // if there is a tie
            } else {
             console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Tie: No points awarded
                Current score: p1: ${this.player1.score}, p2: ${this.player2.score}
                `)
            }
        }

        if (this.player1.score > this.player2.score) {
            console.log(`Player 1 wins!
                Final Score: p1: ${this.player1.score}
                             p2: ${this.player2.score}
                `)
        } else if (this.player2.score > this.player1.score){
            console.log(`Player 2 wins!
                Final Score: p1: ${this.player1.score}
                             p2: ${this.player2.score}
                `)
        } else {
            console.log('Tie')
        }

    }

}

const game = new Game
game.playGame()

