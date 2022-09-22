import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Animated,
} from 'react-native';
import Numbers from './numbers';
import Operation from './operations';
let flag = true;

export default function Keyboard() {
  const [resultText, setResultText] = useState('');
  const [calctext, setCalcText] = useState('');
  const [dynamicResult, setDynamicResult] = useState('');

  const opacity = useState(new Animated.Value(0))[0];

  function fadeIn() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  function fadeOut() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  useEffect(() => {
    if (
      flag ||
      calctext.charAt(calctext.length - 1) == '+' ||
      calctext.charAt(calctext.length - 1) == '-' ||
      calctext.charAt(calctext.length - 1) == '/' ||
      calctext.charAt(calctext.length - 1) == '*'
    ) {
      console.log(calctext);
    } else {
      setDynamicResult(eval(calctext));
    }
    // console.log(typeof calctext);
  }, [calctext]);

  const onButtonClick = text => {
    console.log(text);
    if (text == '=') {
      flag = true;
      setCalcText('');
      setDynamicResult('');

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
      setResultText('');
      setCalcText('');
      setDynamicResult('');
      flag = true;
      return;
    }

    if (text == 'DEL') {
      // console.log(typeof calctext);
      let val = calctext.charAt(calctext.length - 1);
      if (val == '+' || val == '-' || val == '/' || val == '*') {
        flag = true;
      }
      // console.log(calctext.charAt(calctext.length - 1));

      if(calctext == '')
      {
        return setResultText(
          resultText.toString().substring(0,resultText.length-1));
      }
      return setCalcText(
        calctext.toString().substring(0, calctext.length - 1)

        // console.log(calctext.length)
        // console.log(typeof calctext)
      )
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
  };

  // now return

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText} onPress={fadeIn}>
          {resultText}
        </Text>
        <Text style={styles.resultText1} onPress={fadeOut}>
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
    backgroundColor: '#1d1c00',
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
    color: 'white',
  },
  resultText1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  calculationText: {
    fontSize: 30,
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
  // operations:{
  //     backgroundColor:'#434343',
  //     flex:1,
  // }
});
