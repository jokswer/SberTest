import {ComponentProvider} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {AllFilms, Favorites} from '../presentation/screens';
import {ScreenNames} from './screen-names';

export const registerScreens = () => {
  Navigation.registerComponent(ScreenNames.ALL_FILMS, () => AllFilms);
  Navigation.registerComponent(ScreenNames.FAVORITES, () => Favorites);
};

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
  },
});
