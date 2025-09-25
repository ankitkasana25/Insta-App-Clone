import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import studentStore from "../store/StudentStore";

const Profile = observer(() => {
  const { student } = studentStore;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Information</Text>
      <Text>First Name: {student.firstName}</Text>
      <Text>Last Name: {student.lastName}</Text>
      <Text>Class: {student.class}</Text>
      <Text>Roll No: {student.rollNo}</Text>
      <Text>School Name: {student.schoolName}</Text>
      <Text>Section: {student.section}</Text>
      <Text>Other Info: {student.otherInfo}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Profile;
