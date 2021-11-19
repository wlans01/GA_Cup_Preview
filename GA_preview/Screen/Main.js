import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
} from "react-native";
import data from "../dataTest";
import Home from "./Home";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <Animated.FlatList
        data={data}
        horizontal
        contentContainerStyle={{ paddingHorizontal: 20 }}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Cup data={item} />}
        keyExtractor={(item, index) => index}
      />
      <CupImage />
    </View>
  );
};

export default Main;

const Cup = ({ data }) => {
  const onpress = (e) => {
    console.log(e);
  };
  return (
    <Pressable style={styles.cupbox} onPress={() => onpress(data.id)}>
      <Image />
    </Pressable>
  );
};

const Cupholder = ({ data }) => {
  const onpress = (e) => {
    console.log(e);
  };
  return (
    <Pressable style={styles.cupbox} onPress={() => onpress(data.id)}>
      <Image />
    </Pressable>
  );
};

const CupImage = () => {
  return (
    <View>
      <Image />
    </View>
  );
};

const styles = StyleSheet.create({
  cupbox: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});
