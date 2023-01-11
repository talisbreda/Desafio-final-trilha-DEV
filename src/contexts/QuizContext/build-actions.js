import * as actionTypes from './action-types';

export const buildActions = (dispatch) => {
  return {
    getAllQuizes: () => dispatch({ type: actionTypes.GET_ALL_QUIZES }),
  };
};
