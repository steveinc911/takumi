import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CountryList from '../../containers/CountryList';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={ styles.scrollView }
      >
        <CountryList navigation={navigation} />
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
