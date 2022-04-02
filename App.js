import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34a1eb',
    alignItems: 'center',
    //justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 70,
    width: '100%',
  },
});
