import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up the full screen
    justifyContent: 'center', // centers vertically
    alignItems: 'center', // centers horizontally
  },
  counterText: {
    fontSize: 24, // adjust size of the text
    marginBottom: 20, // space between text and button
  },
});

export default App;
