import {IFilm} from '../@types';
import * as types from '../constants';

export const receiveFilms = (films: IFilm[]) => ({
  type: types.RECEIVE_FILMS_SUCCESS,
  films,
});
export const receiveFilmsPending = () => ({type: types.RECEIVE_FILMS_PENDING});
export const receiveFilmsError = (error: any) => ({
  type: types.RECEIVE_FILMS_ERROR,
  error,
});

export const addToFavorites = (film: IFilm[]) => ({
  type: types.ADD_TO_FAVORITES,
  film,
});
export const deleteFromFavorites = (id: string) => ({
  type: types.DELETE_FROM_FAVORITES,
  id,
});
