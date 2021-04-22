import {AnyAction} from 'redux';

import {
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES,
} from '../constants/action-types';
import {IFilm} from '../@types';

export interface IFavoritesState {
  films: IFilm[];
}

const initialState: IFavoritesState = {
  films: [],
};

export const favoritesStore = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        films:
          state.films.findIndex(film => film.id === action.film.id) === -1
            ? state.films.concat(action.film)
            : state.films,
      };
    case DELETE_FROM_FAVORITES:
      return {
        films: state.films.filter(film => film.id !== action.id),
      };
    default:
      return state;
  }
};
