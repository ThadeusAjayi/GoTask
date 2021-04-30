import {DATA, LOADING, MORE_DATA} from '../types';

const initialState = {
  data: null,
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        data: action.payload,
      };
    case MORE_DATA:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
