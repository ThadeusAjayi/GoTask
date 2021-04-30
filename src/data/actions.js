import Axios from 'axios';
import {DATA, LOADING, MORE_DATA} from '../types';

export const startLoading = () => dispatch =>
  dispatch({type: LOADING, payload: true});
export const stopLoading = () => dispatch =>
  dispatch({type: LOADING, payload: false});

export const getData = (initialLoad, page = 1) => async dispatch => {
  dispatch(startLoading());
  try {
    let data = await Axios.get(`/movie/popular?page=${page}`);
    if (data.data) {
      if (initialLoad) {
        dispatch({
          type: DATA,
          payload: data.data.results,
        });
      } else {
          dispatch({
              type: MORE_DATA,
              payload: data.data.results
          })
      }
    }
    dispatch(stopLoading());
    return Promise.resolve()
  } catch (error) {
    console.log(error.response)
    dispatch(stopLoading());
    return Promise.reject()
  }
};
