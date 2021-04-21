import React from 'react';
import {Provider} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import {AllFilms, Favorites} from '../presentation/screens';
import {ScreenNames} from './screen-names';
import {store} from '../store';
import {colors} from '../constants';

Navigation.registerComponent(
  ScreenNames.ALL_FILMS,
  () =>
    gestureHandlerRootHOC(props => (
      <Provider store={store}>
        <AllFilms {...props} />
      </Provider>
    )),
  () => AllFilms,
);
export const registerScreens = () => {
  Navigation.registerComponent(
    ScreenNames.FAVORITES,
    () =>
      gestureHandlerRootHOC(props => (
        <Provider store={store}>
          <Favorites {...props} />
        </Provider>
      )),
    () => Favorites,
  );
};

Navigation.setDefaultOptions({
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: colors.base,
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
    selectedTextColor: colors.base,
  },
});
