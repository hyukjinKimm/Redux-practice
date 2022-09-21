const { createStore } = require('redux')

const initialState = {
    compA: 'a',
    compB: 12,
    compC: null,
}
const reducer = (preState, action) => {
  switch(action.type){
    case 'CHANGE_COMP_A':
        return {
            compA: action.data,
            compB: 12,
            compC: null
        }
    case 'CHANGE_COMP_B':
        return {
            compa: 'a',
            compB: action.data,
            compC: null
        }
  }
}
const store = createStore(reducer, initialState);

const changeCompA = (data) => {
  return {
    type: 'CHANGE_COMP_A',
    data,
  }
}

store.dispatch(changeCompA('b'))
console.log(store.getState());