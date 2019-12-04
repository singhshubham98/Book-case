import React from "react";
import { Dimensions, Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Bookcase from "./Bookcase";

const createRootNavigator = createStackNavigator({
  Home: {
    screen: Bookcase
  }
});

export default createAppContainer(createRootNavigator);
