import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { setSavedTextClass } from '../redux/storeTask40';

class ComponentTask40 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.savedText || '',
    };
  }

  componentWillUnmount() {
    this.props.setSavedTextClass(this.state.text);
  }

  handleChange = (text) => {
    this.setState({ text });
  };

  render() {
    return (
      <View style={styles.box}>
        <TextInput
          value={this.state.text}
          onChangeText={this.handleChange}
          placeholder="Type here (class)"
          style={styles.input}
        />
        <Text style={styles.text}>Inside: {this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#dbeafe',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    maxWidth: '70%',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#60a5fa',
    padding: 10,
    borderRadius: 6,
    marginBottom: 3,
  },
  text: {
    fontSize: 16,
    color: '#1e3a8a',
  },
});

const mapStateToProps = (state) => ({
  savedText: state.savedTextClass,
});

const mapDispatchToProps = {
  setSavedTextClass,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentTask40);
