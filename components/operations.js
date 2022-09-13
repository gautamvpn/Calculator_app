import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

export default function Operation({onOperation}) {
  let operation = ['AC', '+', '-', '*', '/'];
  let opt = [];
  for (let i = 0; i < 5; i++) {
    console.log(operation[i]);
    opt.push(
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          onOperation(`${operation[i]}`);
        }}
        key={i}>
        <Text style={styles.btnText}>{operation[i]}</Text>
      </TouchableOpacity>,
    );
  }
  return <View>{opt}</View>;
}

const styles = StyleSheet.create({
  btnText: {
    fontSize: 30,

    borderColor: 'gray',
    textAlign: 'center',
    color: 'black',
  },
  btn: {
    backgroundColor: 'orange',
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
});
