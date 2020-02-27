import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CountryDetails from '../../containers/CountryDetails';

export default function Country({ route, navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={ styles.scrollView }
      >
        <CountryDetails route={route} navigation={navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  scrollView:{
    justifyContent: 'center',
    alignItems: 'center',
  }
});
