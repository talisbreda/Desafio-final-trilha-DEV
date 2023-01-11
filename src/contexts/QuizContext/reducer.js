import * as actionTypes from './action-types';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_QUIZES: {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
