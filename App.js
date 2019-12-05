import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Icon } from "react-native-elements";
import BookcaseScreen from "./components/Bookcase";
import ExploreScreen from "./components/Explore";
import AddBookScreen from "./components/AddBook";
import ListsScreen from "./components/Lists";
import ProfileScreen from "./components/Profile";

const TabNavigator = createBottomTabNavigator(
  {
    Bookcase: BookcaseScreen,
    Explore: ExploreScreen,
    "Add Book": AddBookScreen,
    Lists: ListsScreen,
    "My Profile": ProfileScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ color, size }) => {
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
          <Icon name={iconName} type={iconType} size={size} color={color} />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(TabNavigator);
