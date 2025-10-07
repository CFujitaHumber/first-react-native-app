/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Home } from './src/screens';

function App() {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}

export default App;
