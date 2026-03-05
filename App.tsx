/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// NewAppScreen sometimes crashes because ReactNativeVersion is undefined
// so we'll avoid using it directly and display a basic placeholder instead.
import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { HomeScreen } from './HomeScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}


function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* Fallback view because @react-native/new-app-screen may reference
          ReactNativeVersion which can be undefined in some environments */}
      <Text style={{ textAlign: 'center', marginTop: 50 }}>
        Welcome to engineersApp!
      </Text>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
