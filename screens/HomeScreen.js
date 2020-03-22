import React, { useContext, useEffect } from "react";
import {
  ScrollView,
  SafeAreaView,
  Animated,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from "react-native";
import styled from "styled-components";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";
import { Context } from "../components/Context";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Course from "../components/Course";

let faker = require("faker");

const HomeScreen = ({ navigation: { navigate } }) => {
  const { context, setContext } = useContext(Context);

  useEffect(() => {
    StatusBar.setBarStyle("dark-content", true);
  });

  return (
    <Contaier>
      <StatusBar />
      <Menu />
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            <Avatar source={require("../assets/avatar.jpg")} />
            <TouchableOpacity onPress={e => setContext(true)}>
              <Title>Welcome back, {}</Title>
              <Name>{faker.name.firstName()} </Name>
            </TouchableOpacity>
            <Ionicons
              style={{ position: "absolute", right: 20, top: 5 }}
              name="ios-notifications"
              size={32}
              color={"#4775f2"}
            />
          </TitleBar>
          <Subtitle>Cool design tools</Subtitle>
          <ScrollView
            style={{
              flexDirection: "row",
              padding: 20,
              paddingLeft: 12,
              paddingTop: 10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {logos.map((logo, index) => {
              return <Logo image={logo.image} text={logo.text} key={index} />;
            })}
          </ScrollView>
          <Subtitle> Continue Learning</Subtitle>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            {cards.map((card, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigate("Section", { section: card });
                }}
              >
                <Card
                  title={card.title}
                  image={card.image}
                  subtitle={card.subtitle}
                  caption={card.caption}
                  logo={card.logo}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Subtitle style={{ marginTop: 10 }}> Related Courses </Subtitle>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {courses.map((course, index) => (
              <Course
                key={index}
                image={course.image}
                title={course.title}
                subtitle={course.subtitle}
                logo={course.logo}
                author={course.author}
                avatar={course.avatar}
                caption={course.caption}
              />
            ))}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Contaier>
  );
};

export default HomeScreen;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background-color: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Contaier = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const logos = [
  {
    image: require("../assets/logo-framerx.png"),
    text: "Framer X"
  },
  {
    image: require("../assets/logo-figma.png"),
    text: "Figma"
  },
  {
    image: require("../assets/logo-studio.png"),
    text: "Studio"
  },
  {
    image: require("../assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("../assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("../assets/logo-sketch.png"),
    text: "Sketch"
  }
];

const cards = [
  {
    title: faker.commerce.productName(),
    image: require("../assets/background11.jpg"),
    subtitle: faker.company.bsNoun(),
    caption: faker.company.catchPhraseAdjective(),
    logo: { uri: faker.image.abstract() }
  },
  {
    title: faker.commerce.productName(),
    image: require("../assets/background12.jpg"),
    subtitle: faker.company.bsNoun(),
    caption: faker.company.catchPhraseAdjective(),
    logo: { uri: faker.image.abstract() }
  },
  {
    title: faker.commerce.productName(),
    image: require("../assets/background13.jpg"),
    subtitle: faker.company.bsNoun(),
    caption: faker.company.catchPhraseAdjective(),
    logo: { uri: faker.image.abstract() }
  },
  {
    title: faker.commerce.productName(),
    image: require("../assets/background14.jpg"),
    subtitle: faker.company.bsNoun(),
    caption: faker.company.catchPhraseAdjective(),
    logo: { uri: faker.image.abstract() }
  }
];

const courses = [
  {
    title: faker.lorem.words(),
    subtitle: faker.lorem.word(),
    image: require("../assets/background16.jpg"),
    logo: require("../assets/logo-react.png"),
    author: "Aresky",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototipe"
  },
  {
    title: "Prototype in In Vistion Studio",
    subtitle: "subtitle",
    image: require("../assets/background12.jpg"),
    logo: require("../assets/logo-sketch.png"),
    author: "Aresky",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototipe"
  },
  {
    title: "Prototype in In Vistion Studio",
    subtitle: "subtitle",
    image: require("../assets/background1.jpg"),
    logo: require("../assets/logo-swift.png"),
    author: "Aresky",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototipe"
  }
];
