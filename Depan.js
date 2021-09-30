import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
// testing github
export class Depan extends Component {
  state = {
    rencana: '',
  };
  render() {
    return (
      <View style={styles.viewWrapper}>
        <View style={styles.viewAktivitas}></View>
        <View style={styles.viewTombol}>
          <TextInput
            style={styles.textInput}
            placeholder="Masukkan Rencana Aktivitas"
            onChangeText={text => this.setState({rencana: text})}
          />
        </View>
        <View style={styles.viewTombolDelete}></View>
      </View>
    );
  }
}

export default Depan;

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1, // Memenuhi semua layar
    backgroundColor: '#FFFFFF',
    padding: 20, // Memiliki jarak
    // borderWidth: 1,
  },
  viewAktivitas: {
    flex: 4,
    borderWidth: 1,
  },
  viewTombol: {
    flex: 2,
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  viewTombolDelete: {
    marginTop: 20,
    // borderWidth: 1,
  },
  textInput: {
    borderWidth: 1,
  },
});
