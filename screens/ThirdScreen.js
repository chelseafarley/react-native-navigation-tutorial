import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ThirdScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Third</Text>
      <Button title="Pop to root" onPress={() => navigation.popToTop()} />
      <Button title="Pop" onPress={() => navigation.pop()} />
      <StatusBar style="auto" />
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
});
