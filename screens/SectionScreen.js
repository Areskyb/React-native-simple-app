import React, { useEffect } from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, StatusBar, ScrollView } from "react-native";

let faker = require("faker");

const SectionScreen = ({ navigation }) => {
  const section = navigation.getParam("section");

  useEffect(() => {
    StatusBar.setBarStyle("light-content", true);

    return () => {
      StatusBar.setBarStyle("dark-content", true);
    };
  });

  return (
    <Container>
      <StatusBar hidden />
      <Cover>
        <Image source={section.image} />
        <Wrapper>
          <Logo source={section.logo}></Logo>
          <Subtitle>{section.subtitle}</Subtitle>
        </Wrapper>
        <Title>{section.title}</Title>
        <Caption>{section.caption}</Caption>
      </Cover>
      <TouchableOpacity
        style={{ position: "absolute", top: 20, right: 20 }}
        onPress={() => navigation.navigate("Home")}
      >
        <CloseView>
          <Ionicons
            name="ios-close"
            size={36}
            color="#4775f2"
            style={{ marginTop: -2 }}
          />
        </CloseView>
      </TouchableOpacity>
      <ScrollView
        style={{ paddingBottom: 30 }}
        showsHorizontalScrollIndicator={false}
      >
        <Text>{section.title}</Text>
        <Description>{faker.lorem.paragraphs()}</Description>
      </ScrollView>
    </Container>
  );
};

export default SectionScreen;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Cover = styled.View`
  height: 375px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;
const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  left: 20px;
  bottom: 20px;
  width: 300px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;
const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;
const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  margin-left: 5px;
`;

const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #3c4560;
  width: 170px;
  padding-left: 30px;
  padding-top: 40px;
`;

const Description = styled.Text`
  color: #3c4560;
  font-size: 20px;
  margin-right: 40px;
  margin-left: 30px;
  margin-top: 30px;
`;
