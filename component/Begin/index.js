import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
const ScreenBegin = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <View style={styles.topIcon}>
        <Entypo name='moon' size={40} color='#50a7ea' />
      </View>
      <View style={styles.Body}>
        <View style={styles.logo}></View>
      </View>
    </View>
  );
};

export default ScreenBegin;
