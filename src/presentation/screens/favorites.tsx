import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {IFilm} from '../../@types';
import {colors, DELETE_FROM_FAVORITES} from '../../constants';
import {IFavoritesState} from '../../reducers/favorites-store';
import {FilmCard} from '../components';

const keyExtractor = (item: IFilm) => item.id;

export const Favorites = () => {
  const films = useSelector(
    (state: {favoritesStore: IFavoritesState}) => state.favoritesStore.films,
  );
  const dispatch = useDispatch();

  const renderCard = React.useCallback(
    ({item}: {item: IFilm}) => (
      <FilmCard
        favoritesButtonText="Удалить из избранного"
        film={item}
        onPressToFavorites={() => {
          dispatch({type: DELETE_FROM_FAVORITES, id: item.id});
        }}
      />
    ),
    [],
  );

  return (
    <FlatList
      keyExtractor={keyExtractor}
      style={styles.list}
      data={films}
      renderItem={renderCard}
      ListEmptyComponent={<Text style={styles.emptyText}>Ничего нет</Text>}
    />
  );
};

Favorites.options = {
  topBar: {
    title: {
      text: 'Favorites',
    },
  },
  bottomTab: {
    text: 'Favorites',
  },
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: colors.bg,
  },
  emptyText: {
    fontSize: 14,
    textAlign: 'center',
  },
});
