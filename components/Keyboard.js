import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Numbers from './numbers';
import Operation from './operations';

let flag = true;
export default function Keyboard() {
  const [resultText, setResultText] = useState('');
  const [calctext, setCalcText] = useState('');
  const [dynamicResult, setDynamicResult] = useState('');


  // for dynamic calculations
  useEffect(() => {
    let charLast = calctext.charAt(calctext.length - 1);
    if (
      charLast == '+' ||
      charLast == '-' ||
      charLast == '/' ||
      charLast == '*'
    ) {
      console.log(calctext);
    } else {
      setDynamicResult(eval(calctext));
    }
    // console.log(typeof calctext);
  }, [calctext]);


  // keyboard numbers
  const onButtonClick = text => {
    console.log(text);
    let lastChar = calctext.charAt(calctext.length - 1);
    if (text == '=') {
      if (
        lastChar == '+' ||
        lastChar == '-' ||
        lastChar == '/' ||
        lastChar == '*'
      ) {
        return '';
      }
      flag = true;
      setCalcText('');
      setDynamicResult('');

      return calculation(text);
    }
    setResultText('');
    setCalcText(calctext + text);
  };

  //final calculations result.
  const calculation = () => {
    setResultText(eval(calctext));
  };

  // specific operations button
  const onOperation = text => {
    let val = calctext.charAt(calctext.length - 1);
    let nums = '123456789';
    let pattern = /[1-9]/g;
    let matchStrPattern = nums.match(pattern);

    console.log(text);
    //rid off all text
    if (text == 'AC') {
      setResultText('');
      setCalcText('');
      setDynamicResult('');
      flag = true;
      return;
    }

    // Delete button
    if (text == 'DEL') {
      if (val == '+' || val == '-' || val == '/' || val == '*') {
        flag = true;
      }
      if (calctext == '') {
        return setResultText(
          resultText.toString().substring(0, resultText.length - 1),
        );
      } else {
        return setCalcText(
          calctext.toString().substring(0, calctext.length - 1),
        );
      }

      // console.log(calctext.length)
      // console.log(typeof calctext)
    }

    // const new_value = (Array.from(String(resultText), Number)).toString();
    // console.log(typeof resultText)
    // console.log(typeof new_value)
    // console.log(resultText.length)
    // console.log(new_value.length)
    // return setResultText(
    //   new_value.substring(0, new_value.length - 1),

    // );

    if (flag) {
      if (resultText == '') {
        setCalcText(calctext + text);
      } else {
        setCalcText(resultText + text);
        setResultText('');
      }
      flag = false;
    }

    if (matchStrPattern.includes(calctext.charAt(calctext.length - 1))) {
      setCalcText(calctext + text);
    }
  };



  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText} >
          {resultText}
        </Text>
        <Text style={styles.resultText1} >
          {dynamicResult}
        </Text>
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
    backgroundColor: '#8a8a5c',
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  calculation: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#090509',
  },
  button: {
    flex: 7,
    flexDirection: 'row',
    backgroundColor: '#090509',
  },

  item: {
    marginTop: 24,
    padding: 20,
    fontSize: 25,
    marginHorizontal: 18,
    borderRadius: 15,
    fontWeight: 'bold',
  },
  resultText: {
    marginTop: 55,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#1a0d00',
  },
  
  resultText1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#331a00',
  },
  calculationText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  number: {
    flex: 3,
  },
  Operations: {
    flex: 1,
  },
  opt: {
    marginTop: 30,
  },
});
