import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "../components/GoalItem";
import GoalInput from "../components/GoalInput";

export default function App() {
  const [courseGoal, setcourseGoal] = useState([]);

  function addGoalHandler(enteredGoaltext) {
    setcourseGoal((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoaltext,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return <GoalItem itemData={itemData} />;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 4,
  },
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
