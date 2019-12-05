import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class ProfileScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ProfileScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default ProfileScreen;
