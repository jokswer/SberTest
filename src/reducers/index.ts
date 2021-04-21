import {combineReducers} from 'redux';

import {filmsStore} from './films';
import {favoritesStore} from './favorites';

export const rootReducer = combineReducers({
  filmsStore,
  favoritesStore,
});
