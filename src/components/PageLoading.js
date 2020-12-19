import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {PRI_COLOR} from '../constants/colors';

const PageLoading = () => {
  return <ActivityIndicator size={40} color={PRI_COLOR} style={styles.load} />;
};

export default PageLoading;

const styles = StyleSheet.create({
  load: {
    margin: 'auto',
    alignSelf: 'center',
  },
});
