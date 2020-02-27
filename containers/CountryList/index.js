import React, { Component } from 'react';
import { TextInput, Text, ActivityIndicator, View } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Panel from '../../components/Panel'

const COUNTRIES = gql`
  {
    countries {
      code,
      name,
    }
  }
`;

class CountryList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputCountry: '',
            filteredCountries: props.countries,
        }
    }

    render() {
        const { navigation, countries } = this.props;
        const { inputCountry, filteredCountries } = this.state;

        return <View style={ styles.container }>
            <TextInput
                value={ inputCountry }
                onChangeText={ text => {
                    const filteredCountries = countries.filter( r => r.name.toLowerCase().indexOf(text.toLowerCase()) > -1 )
                    this.setState({
                        inputCountry: text,
                        filteredCountries,
                    })
                } }
                placeholder={'Seach countries'}
                style={ styles.textInput }
            />
            {filteredCountries.map(({ code, name }) => (
                <Panel  
                    key={code}
                    onPress={ () => {
                        navigation.navigate("CountryDetails", { code, name } )
                    } }
                >
                    <Text style={ { fontFamily: 'medium' } }>{name}</Text>
                </Panel>
            ) ) }
        </View>;
    }
}

export default function CountryListContainer({ navigation }) {
    const { loading, error, data } = useQuery(COUNTRIES);
  
    if (loading) return <ActivityIndicator />;
if (error) return <Text>Error :( { JSON.stringify(error) }</Text>;
  
    return <View style={ styles.container }>
      <CountryList navigation={navigation} countries={data.countries} />
    </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    padding: 5,
  }
});