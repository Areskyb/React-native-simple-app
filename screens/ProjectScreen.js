import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { Button, ScrollView } from "react-native";
let faker = require("faker");
const ProjectScreen = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <ScrollView
        style={{ paddingBottom: 30 }}
        showsHorizontalScrollIndicator={false}
      >
        <Title>{faker.lorem.words()}</Title>
        <Description>{faker.lorem.paragraphs()}</Description>
      </ScrollView>
      <Button
        style={{ padding: 50 }}
        title="Close"
        onPress={() => {
          navigate("Home");
        }}
      />
    </Container>
  );
};

export default ProjectScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 30px;
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
