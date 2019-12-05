import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Icon } from "react-native-elements";

import Bookcase from "./Bookcase";
import Explore from "./Explore";
import AddBook from "./AddBook";
import Lists from "./Lists";
import Profile from "./Profile";

const TabNavigator = createBottomTabNavigator(
  {
    Bookcase: Bookcase,
    Explore: Explore,
    "Add Book": AddBook,
    Lists: Lists,
    "My Profile": Profile
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName, iconType;
        if (routeName === "Bookcase") {
          (iconName = `open-book`), (iconType = "entypo");
        } else if (routeName === "Explore") {
          (iconName = "ios-map"), (iconType = "ionicon");
        } else if (routeName === "Add Book") {
          (iconName = "ios-add-circle-outline"), (iconType = "ionicon");
        } else if (routeName === "Lists") {
          (iconName = "list"), (iconType = "entypo");
        } else {
          (iconName = "ios-person"), (iconType = "ionicon");
        }

        return (
          <Icon name={iconName} type={iconType} size={28} color={tintColor} />
        );
      },
      tabBarLabel: navigation.state.routeName
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(TabNavigator);
