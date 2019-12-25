import { ADD_DECK, ADD_CARD, LOAD_DATA } from "../actions/types";

import Deck from "./../data/Deck";
import { writeDecks } from "./../storage/decks";


function decksWithNewCard(oldDecks, card) {
    //check what's olddecks and new incoming card here

    let newState = oldDecks.map(deck => {
     if (deck.id == card.deckID) {       //deckid and card.deckid must match?
       alert('WE MATCH')
       console.log('are we here?')
       console.log('deck.id',deck.id)
       deck.addCard(card);                      //working now -
       return deck;
     } else {         //console out here
       console.log('no match deck.id', deck.id)
       console.log('no match card.deckID', card.deckID)
       // deck.addCard(card);    //gets added but then not remembered at the store
       return deck;
     }
   });
   console.log('newState', newState)
   saveDecks(newState);
   alert();
   return newState;
}

function saveDecks(state) {
  writeDecks(state);
  return state;
}

const reducer = (state = [], action) => {
  console.warn("Changes are not persisted to disk");
console.log('ayy check state if its added', state)
  switch (action.type) {
    case LOAD_DATA:
      console.warn('loaddata', action.data)
      return action.data;
    case ADD_DECK:
      console.warn('case ADD_DECK => action: ', action.data)
      console.warn('state before adding', state)
      // return state.concat(action.data);
      let newState = state.concat(action.data);   //was missing these two lines
     saveDecks(newState);
    case ADD_CARD:

      console.warn('case ADD_CARD => action: ', action.data)
      return decksWithNewCard(state, action.data);
  }


  return state;   //see what state is here maybe
};

export default reducer;
