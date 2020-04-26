// Global shared styles for screens

import { StyleSheet } from 'react-native';

export const STYLES = StyleSheet.create({
  flex: {
    flex: 1
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 22
  },
  selectButtonContainer: {
    margin: 20,
    borderRadius: 5
  },
  selectButtonTitle: {
    padding: 10,
    fontSize: 18
  }
});

export const COLORS = {
  primaryDark: '#22212c',
  primaryLight: '#f8f8f2',
  primaryRed: '#ff5555',
  primaryPink: '#ff80bf',
  primaryYellow: '#ffff80',
  primaryOrange: '#ff9580'
};
