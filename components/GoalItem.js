import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View key={props.itemData.index} style={styles.goalItem}>
      <Text style={styles.goalText}>
        {props.itemData.index + 1 + ". "}
        {props.itemData.item}
      </Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
