import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Panel(props) {
  return (
    <TouchableOpacity onPress={ () => {
        if (props.onPress) {
            props.onPress();
        }
    } } style={styles.container}>
      {props.children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    width: '100%',
    marginTop: 5,
  }
});
