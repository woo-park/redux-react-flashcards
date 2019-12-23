// let state = 0;

const counterReducer = (state = 0, action) => {
  switch (action.type) {      //checking type as it goes
    case 'INCREMENT':
        return state + action.payload;
    case 'DECREMENT':
        return state - action.payload;
    default:
        return state;

  }
}
export default counterReducer;
