import React from 'react';
import {View, Text, StyleSheet, Pressable, Button} from 'react-native';

import {IFilm} from '../../@types';
import {colors} from '../../constants';

interface IProps {
  film: IFilm;
  favoritesButtonText: string;
  onPressToFavorites: () => void;
  onPressCard?: () => void;
}

export const FilmCard: React.FC<IProps> = React.memo(
  ({film, onPressCard, onPressToFavorites, favoritesButtonText}) => {
    const {title, description, rt_score, release_date} = film;

    return (
      <Pressable style={styles.container} onPress={onPressCard}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.describtion} numberOfLines={5}>
          {description}
        </Text>
        <View style={styles.info}>
          <View>
            <Text style={styles.infoText}>Release date: {release_date}</Text>
            <Text style={styles.infoText}>Rating: {rt_score}</Text>
          </View>
          <Button
            color={colors.base}
            title={favoritesButtonText}
            onPress={onPressToFavorites}
          />
        </View>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 5,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  describtion: {
    fontSize: 14,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  infoText: {
    fontSize: 14,
  },
});
