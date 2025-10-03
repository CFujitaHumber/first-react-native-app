/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */
import React from 'react';
import {
  StatusBar,
  useColorScheme,
  View, //Deprecated, but  part of lab instruction
} from 'react-native';
import { HomeScreen } from './src/screens';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  /**
   * So a safe area is always visible, but safeAreaInsets is a hook that modifies how everything looks
   * using it provides more control over the layout
   * especically with some devices that have specific elements or components that may cause
   * changes to layout.
   * see https://reactnavigation.org/docs/handling-safe-area/?config=dynamic
   * -- TODO: fix
   * */
  //const safeAreaInsets = useSafeAreaInsets();

  return (
    <>
      {/*<SafeAreaProvider> */}
      {/* Provides a safe viewing area not obstructed by phone parts (like notches) */}
      <View style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />{' '}
        {/*Zone at top of screen containing time, WI-FI, battery etc*/}
        <HomeScreen />
      </View>
      {/*</SafeAreaProvider>*/}
    </>
  );
}

export default App;
