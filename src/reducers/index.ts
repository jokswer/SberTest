import {combineReducers} from 'redux';

import {filmsStore} from './films-store';
import {favoritesStore} from './favorites-store';

export const rootReducer = combineReducers({
  filmsStore,
  favoritesStore,
});
