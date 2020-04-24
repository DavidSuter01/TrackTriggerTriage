import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar
} from "react-native";

function Splash(props) {
  return (
    <View style={styles.rect}>
      <View style={styles.textColumn}>
        <Text style={styles.text}>
          See how we are{"\n"}changing how{"\n"}social distancing works...
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Signup")}
          style={styles.button}
        >
          <Text style={styles.text2}>Create account</Text>
        </TouchableOpacity>
        <View style={styles.rect3}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Signup")}
            style={styles.button3}
          >
            <Text style={styles.text22}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textColumnFiller}></View>
      <View style={styles.rect2}>
        <StatusBar barStyle="dark-content" hidden={true}></StatusBar>
        <View style={styles.text3Row}>
          <Text style={styles.text3}>Have an account already?</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Login")}
            style={styles.button2}
          >
            <Text style={styles.text4}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar barStyle="light-content" hidden={true}></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "#178cee"
  },
  text: {
    width: 308,
    height: 153,
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    lineHeight: 50,
    textAlign: "left",
    marginTop: 218,
    marginLeft: 3
  },
  button: {
    height: 81,
    backgroundColor: "rgba(29,161,242,1)",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: 120,
    marginRight: 16
  },
  text2: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    alignSelf: "center"
  },
  rect3: {
    width: 96,
    height: 50,
    alignSelf: "flex-end",
    marginTop: -572
  },
  button3: {
    width: 49,
    height: 50,
    marginLeft: 36
  },
  text22: {
    width: 66,
    height: 50,
    color: "#1da1f2",
    fontSize: 18,
    lineHeight: 50,
    marginLeft: 5
  },
  textColumn: {
    marginTop: 15,
    marginLeft: 31,
    marginRight: 15
  },
  textColumnFiller: {
    flex: 1
  },
  rect2: {
    width: 319,
    height: 39,
    marginBottom: 45,
    alignSelf: "center"
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 5
  },
  button2: {
    width: 55,
    height: 29,
    marginLeft: 10
  },
  text4: {
    color: "rgba(143,196,255,1)",
    fontSize: 20,
    lineHeight: 50,
    marginTop: -11
  },
  text3Row: {
    height: 29,
    flexDirection: "row",
    marginTop: 8,
    marginRight: 24
  }
});

export default Splash;
