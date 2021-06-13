import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

import { theme } from '../constants';
import { Button, IconButton } from '../components';

export default function DemoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.text}>Demo Screen Placeholder</Text>
        <Button
          title='Solid'
          backgroundColor={theme.primary}
          containerStyle={styles.button}
        />
        <Button
          title='Outline'
          outline
          titleColor={theme.strong}
          containerStyle={styles.button}
          width='75%'
        />
        <View style={styles.section}>
          <IconButton
            variant='MaterialCommunityIcons'
            iconName='rocket-launch'
            color={theme.primary}
            size={28}
          />
          <IconButton
            variant='AntDesign'
            iconName='rocket1'
            color={theme.strong}
            size={28}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background
  },
  scrollContainer: {
    paddingHorizontal: 16
  },
  text: {
    fontSize: 22,
    color: theme.primary,
    fontWeight: '600'
  },
  button: {
    marginTop: 20
  },
  section: {
    paddingVertical: 18,
    flexDirection: 'row'
  }
});
