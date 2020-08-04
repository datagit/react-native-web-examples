import React from "react";
import { View, Text } from "react-native";
// import { View, Text } from "react-native-elements";
const HelloWorld = ({ name }) => {
  return (
    <View>
      <Text>Hello World {name}!</Text>
    </View>
  );
};
export default HelloWorld;
