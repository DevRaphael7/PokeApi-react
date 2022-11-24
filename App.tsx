import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import { PokedexPage } from './src/pages/PokedexPage/Page';

export default function App() {
  return (
    <View style={styles.container}>
      <span style={{'marginTop': '20px'}}></span>
      <PokedexPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a335ef',
    alignItems: 'center'
  },
});
