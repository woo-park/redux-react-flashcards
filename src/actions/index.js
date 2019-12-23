export const increment = (number) => {
  return {
    type: 'INCREMENT',
    payload: number
  }
}

export const decrement = (number) => {
  return {
    type: 'DECREMENT',
    payload: number
  }
}

//can make bunch different actions -> these get dispatched -> reducer changes the state
