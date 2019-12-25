// import { AsyncStorage } from "react-native";
import Deck from "./../data/Deck";

import { MockDecks } from "./../data/Mocks";
export const DECK_KEY = "flashcards:decks";   //problem lies here//not really
/*
Storage {flashcards:decks: "[{"name":"French","id":"ed4e6e93449e09
this is how it begins
*/

let localStorage = window.localStorage;

async function read(key, deserializer) {
  try {
    let val = await localStorage.getItem(key);
    if (val !== null) {
      console.log(val)


      let readValue = JSON.parse(val).map(serialized => {
        return deserializer(serialized);
      });

      console.log('readvalue =>', readValue)
      console.log(readValue[0])
      alert('we got val from localStorage', val)
      return readValue;
    } else {
      alert('it is null!!')
      console.info(`${key} not found on disk.`);
    }
  } catch (error) {
    console.warn("AsyncStorage error: ", error.message);
  }
}

async function write(key, item) {
  try {
    await localStorage.setItem(key, JSON.stringify(item));
    console.log('successfully saved?')
    console.log(localStorage.getItem(key))
    alert('checking if successfully saved')
  } catch (error) {
    console.error("AsyncStorage error: ", error.message);
  }
}

export const readDecks = () => {
  alert('we are about to read decks')  // not here at all
  return read(DECK_KEY, Deck.fromObject);
};

export const writeDecks = decks => {
  console.log(decks[0],'decksdecks')
  console.log(decks[1],'decksdecks')
  console.log(localStorage,'localstore')
  alert('this is decks -> writeDecks', decks);
  return write(DECK_KEY, decks);
};

// For debug/test purposes.
const replaceData = writeDecks(MockDecks);
