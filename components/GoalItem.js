import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      style={({ pressed }) => pressed && styles.pressedItem}
      onPress={props.onDeleteItem.bind(this, props.itemData.item)}
    >
      <View key={props.itemData.index} style={styles.goalItem}>
        <Text style={styles.goalText}>
          {props.itemData.index + 1 + ". "}
          {props.itemData.item}
        </Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;s

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
