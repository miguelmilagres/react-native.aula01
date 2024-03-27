import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.vermelho}>Miguel Milagres</Text>
      <Text style={styles.verde}>Desenvolvedor Back End</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  vermelho: {
    color: "red",
    fontSize: 24,
  },
  verde: {
    color: "white",
    fontSize: 24,
  },
});
