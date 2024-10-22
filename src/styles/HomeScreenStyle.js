// src/styles/homeScreenStyle.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    color: '#fff',
    marginVertical: 10,
  },
  image: {
    width: 200, // Adjust as necessary
    height: 200, // Adjust as necessary
    marginTop: 20,
    borderRadius: 10,
  },
});

export default styles;