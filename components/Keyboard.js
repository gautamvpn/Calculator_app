import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import Numbers from './numbers';
import Operation from './operations';

export default function Keyboard() {
  const [resultText, setResultText] = useState('');
  const [calctext, setCalcText] = useState('');

  const onButtonClick = text => {
    console.log(text);
    if (text == '=') {
      return calculation(text);
    }
    setCalcText(calctext + text);
  };

  const calculation = () => {
    setResultText(eval(calctext));
  };

  const onOperation = text => {
    console.log(text);
    if (text == 'AC') {
      setResultText(0);
      setCalcText('');
      return;
    }

    if (text == 'DEL') {
      return setCalcText(calctext.toString().substring(0, calctext.length - 1));
    }
    setCalcText(calctext + text);
  };

  // now return

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>{calctext}</Text>
      </View>
      <View style={styles.button}>
        <View style={styles.number}>
          <Numbers onButtonClick={onButtonClick} onOperation={onOperation} />
        </View>
        <View style={styles.Operations}>
          <View style={styles.opt}>
            <Operation onOperation={onOperation} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
  },
  result: {
    backgroundColor: 'gray',
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  button: {
    flex: 7,
    flexDirection: 'row',
    backgroundColor: '',
  },

  item: {
    marginTop: 24,
    padding: 20,
    fontSize: 25,
    marginHorizontal: 18,
    backgroundColor: 'gray',
    borderRadius: 15,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  calculationText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  number: {
    flex: 3,
  },
  Operations: {
    flex: 1,
    backgroundColor: '#a2a2a2',
  },
  opt: {
    marginTop: 30,
  },
  // operations:{
  //     backgroundColor:'#434343',
  //     flex:1,
  // }
});
