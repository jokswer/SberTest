import React from 'react';
import {View, Text, Dimensions, StyleSheet, ScrollView} from 'react-native';

import {IFilm} from '../../@types';
import {colors} from '../../constants';
import {Loading} from './loading';

interface IProps {
  film?: IFilm;
}

export const modalHeight = Dimensions.get('window').height * 0.6;

export const FilmModal: React.FC<IProps> = React.memo(({film}) => {
  const [numberOfLines, setNumberOfLines] = React.useState(3);

  const onMoreTextPress = React.useCallback(() => {
    setNumberOfLines(numberOfLines === 3 ? 0 : 3);
  }, [numberOfLines]);

  if (!film) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{film.title}</Text>
          <Text style={styles.subTitle}>{film.original_title}</Text>
          <Text style={styles.subTitle}>{film.original_title_romanised}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text
            style={[styles.infoText, styles.textContainer]}
            numberOfLines={numberOfLines}>
            {film.description}
          </Text>
          <Text
            style={[styles.infoText, styles.moreText]}
            onPress={onMoreTextPress}>
            {numberOfLines === 3 ? 'Развернуть' : 'Свернуть'}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.infoText}>Director: {film.director}</Text>
          <Text style={styles.infoText}>Producer: {film.producer}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.infoText}>Release date: {film.release_date}</Text>
          <Text style={styles.infoText}>Running time: {film.running_time}</Text>
          <Text style={styles.infoText}>Rating: {film.rt_score}</Text>
        </View>
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: modalHeight,
    padding: 10,
    backgroundColor: colors.bg,
  },
  titleContainer: {
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
  },
  infoText: {
    fontSize: 14,
  },
  textContainer: {
    marginVertical: 5,
  },
  moreText: {
    color: colors.base,
  },
});
