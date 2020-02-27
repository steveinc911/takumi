import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { StyleSheet, TouchableOpacity } from 'react-native';

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export default function CountryList({ navigation }) {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return <View style={ styles.container }>
    {data.rates.map(({ currency, rate }) => (
        <Text style={ { fontFamily: 'medium' } } key={currency}>{currency}: {rate}</Text>
    ) ) }
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
  }
});