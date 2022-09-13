import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

export default function Numbers({onButtonClick, onOperation}) {
  let rows = [];
  let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['DEL', 0, '='],
  ];

  for (let i = 0; i < 4; i++) {
    var row = [];
    for (let j = 0; j < 3; j++) {
      // console.log(nums[i][j]);
      if (nums[i][j] == 'DEL') {
        row.push(
          <TouchableOpacity
            key={3 * i + j}
            style={styles.btn}
            onPress={() => {
              onOperation(`${nums[i][j]}`);
            }}>
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>,
        );
      } else {
        row.push(
          <TouchableOpacity
            key={3 * i + j}
            style={styles.btn}
            onPress={() => {
              onButtonClick(`${nums[i][j]}`);
            }}>
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>,
        );
      }
    }

    rows.push(<View style={styles.row}>{row}</View>);
  }

  return rows;
}

// stylesheet
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 40,
  },
  btnText: {
    fontSize: 30,
    padding: 8,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'yellow',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
