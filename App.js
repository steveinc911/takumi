import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/Home";
import CountryScreen from "./screens/Country";
import * as Font from 'expo-font'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink(
  {
   uri: 'https://countries.trevorblades.com/'
  }),
});
const Stack = createStackNavigator();


class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    Font.loadAsync({
      'serif': require('./assets/fonts/PlayfairDisplay-VariableFont_wght.ttf'),
      'sansSerif': require('./assets/fonts/Roboto-Light.ttf'),
      'medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'light': require('./assets/fonts/Roboto-Light.ttf'),
      'lightItalic': require('./assets/fonts/Roboto-LightItalic.ttf'),
      'mediumItalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
    });
  }

  render(){
    return (
      <ApolloProvider client={client}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen 
                name="CountryDetails" 
                component={CountryScreen}
                options={{ headerShown: true }}
              />
            </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
