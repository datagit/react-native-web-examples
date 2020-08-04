import React from "react";
import { View } from "react-native";
import { Text, Tile } from "react-native-elements";
import * as Colors from "../styles/colors";

const Elements = () => {
  return (
    <View>
      <View
        style={{
          flex: 1
        }}
      >
        <Text
          h1
          style={{
            color: Colors.PRIMARY
          }}
        >
          Hello H1
        </Text>
        <Text h2>Hello h2</Text>
        <Text h3>Hello h3</Text>
        <Text h4>Hello h4</Text>
      </View>
      <View
        style={{
          flex: 3
        }}
      >
        <Tile
          imageSrc={require("../assets/images/dummy1.jpg")}
          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
          titleStyle={{ color: Colors.SECONDARY }}
          featured
          caption="some caption text"
          contentContainerStyle={{ height: 10 }}
          width="200"
        />
      </View>
    </View>
  );
};
export default Elements;
