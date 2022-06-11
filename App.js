import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/*View of first use page*/}
      <View style={styles.firstUsePage}>
        <Button title="Rezept einscannen"/>
        <Button title="Medikationsplan manuell einrichten"/>
        <Button title="Apotheker/in kontaktieren"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstUsePage: {
    flex: 1,
    justifyContent: 'center',


    //borderWidth: 2,
  }
});
