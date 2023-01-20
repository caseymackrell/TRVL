import { createStore } from 'redux';

const initialState = {
  phoneNumber: '+1',
  token: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ID':
      return { ...state, id: action.id };
    default:
      return state;
  }
}

export default createStore(reducer)