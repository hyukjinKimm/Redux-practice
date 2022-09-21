const { createStore } = require('redux')

const initialState = {
    compA: 'a',
    compB: 12,
    compC: null,
}
const reducer = () => {}
const store = createStore(reducer, initialState);

console.log(store.getState());