import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import ProjectScreen from "../screens/ProjectScreen";
import { Ionicons } from "@expo/vector-icons";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";
const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Section: {
      screen: SectionScreen,
      navigationOptions: {
        headerShown: false
      }
    }
  },
  {
    mode: "modal"
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name={"ios-home"}
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  };
};

const CoursesStack = createStackNavigator({
  Courses: {
    screen: ProjectScreen,
    navigationOptions: {
      headerShown: false
    }
  }
});

CoursesStack.navigationOptions = {
  tabBarLabel: "Study",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name={"ios-albums"}
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};
const ProjectStack = createStackNavigator({
  Projects: {
    screen: ProjectScreen,
    navigationOptions: {
      headerShown: false
    }
  }
});

ProjectStack.navigationOptions = {
  tabBarLabel: "Screen Shots",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name={"ios-folder"}
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  CoursesStack,
  ProjectStack
});

export default TabNavigator;
