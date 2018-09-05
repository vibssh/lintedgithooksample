const { createStore } = require('redux');

const initialState = {
  age: 21,
};

const myReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'ADD':
      Object.assign(newState, state, { age: newState.age += action.value });
      break;
    case 'SUB':
      Object.assign(newState, state, { age: newState.age -= action.value });
      break;
    default:
      return newState;
  }
  return newState;
};

const store = createStore(myReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: 'ADD', value: 50 });
store.dispatch({ type: 'SUB', value: 10 });
