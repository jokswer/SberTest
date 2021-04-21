import {AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';

import {
  RECEIVE_FILMS_SUCCESS,
  RECEIVE_FILMS_PENDING,
  RECEIVE_FILMS_ERROR,
} from '../constants/action-types';
import {request} from '../services';
import {receiveFilms, receiveFilmsError, receiveFilmsPending} from '../actions';
import {IFilm} from '../@types';

export interface IFilmState {
  pending: boolean;
  films: IFilm[];
  error: any;
}

const initialState: IFilmState = {
  pending: false,
  films: [],
  error: null,
};

export const filmsStore = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case RECEIVE_FILMS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case RECEIVE_FILMS_SUCCESS:
      return {
        pending: false,
        films: action.films,
        error: null,
      };
    case RECEIVE_FILMS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getFilmsThunk = (
  dispatch: ThunkDispatch<IFilmState, AnyAction, any>,
) => {
  dispatch(receiveFilmsPending());

  request<IFilm[]>('films')
    .then(data => dispatch(receiveFilms(data)))
    .catch(error => receiveFilmsError(error));
};
