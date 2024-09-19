import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    // width: "80%",
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    boxShadowColor: "black",
    boxShadowOffset: { width: 0, height: 2 },
    boxShadowRadius: 6,
    boxShadowOpacity: 0.25,
  },
});
