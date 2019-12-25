import { ADD_DECK, ADD_CARD, LOAD_DATA } from "../actions/types";

import Deck from "./../data/Deck";
import { writeDecks } from "./../storage/decks";


function decksWithNewCard(oldDecks, card) {
    //check what's olddecks and new incoming card here

    let newState = oldDecks.map(deck => {
     if (deck.id === card.deckID) {       //deckid and card.deckid must match?
       deck.addCard(card);
       return deck;
     } else {         //console out here
       return deck;
     }
   });
   saveDecks(newState);
   return newState;
}

function saveDecks(state) {
  writeDecks(state);
  return state;
}

const reducer = (state = [], action) => {
  console.warn("Changes are not persisted to disk");

  switch (action.type) {
    case LOAD_DATA:
      console.warn('loaddata', action.data)
      return action.data;
    case ADD_DECK:
      console.warn('addingdeck', action.data)
      alert('adddeck',action.data)
      return state.concat(action.data);
    case ADD_CARD:
      console.warn('addingcard', action.data)
      alert('addcard',action.data)
      return decksWithNewCard(state, action.data);
  }
  return state;   //see what state is here maybe
};

export default reducer;
