import React from 'react';
import { Text, StyleSheet } from 'react-native';
import SharedTextContext from '../contexts/SharedTextContext';


class ComponentOne extends React.Component {
  static contextType = SharedTextContext;

  render() {
    const [sharedText] = this.context;
    return <Text style={styles.text}>Shared: {sharedText}</Text>;
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#00796b',
  },
});

export default ComponentOne;
