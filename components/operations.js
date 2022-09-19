import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,TouchableBounce, Button} from 'react-native';

export default function Operation({onOperation}) {
  let operation = ['AC', '+', '-', '*', '/', 'DEL'];
  let opt = [];
  for (let i = 0; i < 6; i++) {
    // console.log(operation[i]);
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

    borderColor: 'black',
    borderRadius:15,
    textAlign: 'center',
    color:'white',
  },
  btn: {
    backgroundColor: '#090509',
    borderRadius:20,
    marginTop: 12,
    paddingTop: 5,
    paddingBottom: 15,
  
  },
});
