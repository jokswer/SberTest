import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import {colors} from '../../constants';

export const Loading: React.FC = React.memo(() => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.base} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
