import React, { useState } from "react";
import { Text, TextInput, StyleSheet, ScrollView } from "react-native";

const Home = () => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    class: "",
    rollNo: "",
    schoolName: "",
    section: "",
    otherInfo: "",
  });

  const setStudentField = (field: string, value: string) => {
    setStudent((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Information Form</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={student.firstName}
        onChangeText={(text) => setStudentField("firstName", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={student.lastName}
        onChangeText={(text) => setStudentField("lastName", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Class"
        value={student.class}
        onChangeText={(text) => setStudentField("class", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Roll No"
        keyboardType="numeric"
        value={student.rollNo}
        onChangeText={(text) => setStudentField("rollNo", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="School Name"
        value={student.schoolName}
        onChangeText={(text) => setStudentField("schoolName", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Section"
        value={student.section}
        onChangeText={(text) => setStudentField("section", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Other Information"
        value={student.otherInfo}
        onChangeText={(text) => setStudentField("otherInfo", text)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
});

export default Home;
