import React, { Component } from 'react';
import { TextInput, Text, ActivityIndicator, View, Dimensions } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const COUNTRY = gql`
        query getCountry($code: String!) {
            country(code: $code) {
            code,
            name,
            states {
                code,
                name
            },
            languages {
                code,
                name,
                rtl
            },
            currency
        }
    }
    `;

export default function CountryDetails({ route, navigation }) {
    const { code } = route.params;
    

    const { loading, error, data } = useQuery(COUNTRY, { variables: { code } });
  
    if (loading) return <ActivityIndicator />;
    if (error) return <Text>Error :(</Text>;

    const { country } = data
  
    return <View style={ styles.container }>
        <View style={ styles.row }>
            <Text style={ styles.label } >Name</Text>
            <Text style={ styles.value }>{ 
                country.name 
            }</Text>
        </View>
        <View style={ styles.row }>
            <Text style={ styles.label } >States</Text>
            <Text style={ styles.value }>{ 
                country.states.map( r => r.name ).join(',') 
            }</Text>
        </View>
        <View style={ styles.row }>
            <Text style={ styles.label } >Languages</Text>
            <Text style={ styles.value }>{ 
                country.languages.map( r => r.name ).join(',') 
            }</Text>
        </View>
        <View style={ styles.row }>
            <Text style={ styles.label } >Currency</Text>
            <Text style={ styles.value }>{ 
                country.currency 
            }</Text>
        </View>
        <MapView 
            style={styles.mapStyle}
            initialRegion={{
              latitude: 52.430123,
              longitude: -1.918363,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            >
            <Marker
              coordinate={{latitude: 52.430123, longitude: -1.918363 }}
              title={country.name}
              description={country.code}
            />
        </MapView>
    </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  row: {
    flex: 1,
    padding: 5,
  },
  label: {
    fontFamily: 'light',
    textTransform: 'uppercase',
    color: 'red',
  },
  value: {
    fontFamily: 'medium'
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 300,
  },
});