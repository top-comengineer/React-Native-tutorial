import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Secondary = () => {
  return (
    <View style={styles.container}>
      <Text>Secondary Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Secondary;
