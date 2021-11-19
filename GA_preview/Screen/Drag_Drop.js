import React, { useRef } from "react";
import { StyleSheet, Text, View, Animated, PanResponder } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Drag_Drop = () => {
  //values
  const scale = useRef(new Animated.Value(1)).current;
  const Position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const scaleone = Position.y.interpolate({
    inputRange: [-300, -80],
    outputRange: [2, 1],
    extrapolate: "clamp",
  });
  const scaletwo = Position.y.interpolate({
    inputRange: [80, 300],
    outputRange: [1, 2],
    extrapolate: "clamp",
  });
  //Animations
  const onPressIn = Animated.spring(scale, {
    toValue: 0.95,
    useNativeDriver: true,
  });
  const onPressout = Animated.spring(scale, {
    toValue: 1,
    useNativeDriver: true,
  });
  const gocenter = Animated.spring(Position, {
    toValue: 0,
    tension: 5,
    useNativeDriver: true,
  });
  const ondrop = Animated.spring(scale, {
    toValue: 0,
    useNativeDriver: true,
  });
  const goHome = Animated.timing(Position, {
    toValue: 0,
    useNativeDriver: true,
  });

  //panResponder
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        onPressIn.start();
      },
      onPanResponderMove: (_, { dx, dy }) => {
        Position.setValue({ x: dx, y: dy });
      },
      onPanResponderRelease: (_, { dy }) => {
        if (dy < -250) {
          ondrop.start();
        } else if (dy > 250) {
          ondrop.start();
        } else {
          Animated.parallel([onPressout, gocenter]).start();
        }
      },
    })
  ).current;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.TopContainer}>
        <Animated.View
          style={{ ...styles.textView, transform: [{ scale: scaleone }] }}
        >
          <Text style={styles.font}>위로</Text>
        </Animated.View>
      </View>
      <View style={styles.MidContainer}>
        <Animated.View
          {...panResponder.panHandlers}
          style={{
            ...styles.iconbox,
            transform: [...Position.getTranslateTransform(), { scale }],
          }}
        >
          <Ionicons name="beer" color="black" size={64} />
        </Animated.View>
      </View>
      <View style={styles.BtmContainer}>
        <Animated.View
          style={{ ...styles.textView, transform: [{ scale: scaletwo }] }}
        >
          <Text style={styles.font}>아래로</Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default Drag_Drop;

const styles = StyleSheet.create({
  TopContainer: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  MidContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  BtmContainer: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  font: {
    fontSize: 35,
  },
  textView: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 50,
  },
  iconbox: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    zIndex: 10,
  },
});
