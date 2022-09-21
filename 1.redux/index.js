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
            ...preState,
            compA: action.data,
        }
    case 'CHANGE_COMP_B':
        return {
            ...preState,
            compB: action.data,
        }
    case 'CHANGE_COMP_C':
        return {
            ...preState,
            compC: action.data,
        }
    default:
        console.log('hi')
        return preState
  }
}
const store = createStore(reducer, initialState);

const changeCompA = (data) => {
  return {
    type: 'CHANGE_COMP_A',
    data,
  }
}
console.log(store.getState());
store.dispatch(changeCompA('b'))
