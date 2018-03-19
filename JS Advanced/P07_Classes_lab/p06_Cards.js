let result = (function () {
    let Suits = {CLUBS: "\u2663", DIAMONDS: "\u2666", HEARTS: "\u2665", SPADES: "\u2660"};

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'K', 'Q', 'J'];
            if (!validFaces.includes(value)) {
                throw new Error("Invalid face, please try again!")
            }
            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {

            if (!Object.keys(Suits).map(k => Suits[k]).includes(value)) {
                throw new Error("Invalid suits, please try again!")
            }
            this._suit = value;
        }

        toString() {
            //   return this._face + this._suit; // now we are using the real properties
            return this.face + this.suit; // here we are using the getters not the real properties
        }
    }

    return {
        Suits,
        Card
    }


})();
// let Suits=solution.Suits;
// let Card = solution.Card;
// let card = new Card("2",Suits.SPADES);
let Suits = result.Suits;
let Card = result.Card;

let card = new Card("2", Suits.SPADES);