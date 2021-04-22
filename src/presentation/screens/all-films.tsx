import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';

import {IFilm} from '../../@types';
import {ADD_TO_FAVORITES, colors} from '../../constants';
import {getFilmsThunk, IFilmState} from '../../reducers/films-store';
import {FilmCard, FilmModal, modalHeight, Loading} from '../components';

const keyExtractor = (item: IFilm) => item.id;

export const AllFilms = () => {
  const sheetRef = React.useRef<BottomSheet>(null);
  const [selectedFilm, setSelectedFilm] = React.useState<IFilm>();

  const dispatch = useDispatch();
  const films = useSelector(
    (state: {filmsStore: IFilmState}) => state.filmsStore.films,
  );
  const pending = useSelector(
    (state: {filmsStore: IFilmState}) => state.filmsStore.pending,
  );

  React.useEffect(() => {
    dispatch(getFilmsThunk);
  }, []);

  const renderCard = React.useCallback(
    ({item}: {item: IFilm}) => (
      <FilmCard
        film={item}
        favoritesButtonText="Добавить в избранное"
        onPressCard={() => {
          setSelectedFilm(item);
          sheetRef.current?.snapTo(0);
        }}
        onPressToFavorites={() => {
          dispatch({type: ADD_TO_FAVORITES, film: item});
        }}
      />
    ),
    [],
  );

  const renderModal = React.useCallback(
    () => <FilmModal film={selectedFilm} />,
    [selectedFilm],
  );

  if (pending) {
    return <Loading />;
  }

  return (
    <>
      <FlatList
        keyExtractor={keyExtractor}
        style={styles.list}
        data={films}
        renderItem={renderCard}
      />
      <BottomSheet
        initialSnap={1}
        ref={sheetRef}
        snapPoints={[modalHeight, 0]}
        borderRadius={10}
        renderContent={renderModal}
      />
    </>
  );
};

AllFilms.options = {
  topBar: {
    title: {
      text: 'All films',
    },
  },
  bottomTab: {
    text: 'All films',
  },
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: colors.bg,
  },
});
