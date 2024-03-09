import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { TestemonialContainer } from "./testemonial-styles";
import {
  BigText,
  TiltedText,
  SectionContainer,
  SectionContent,
} from "../global-styles";
function Testemonial() {
  return (
    <SectionContainer>
      <SectionContent>
        <TiltedText>Testemonial</TiltedText>
        <BigText>Client's Kind Word</BigText>
        <TestemonialContainer>
          {" "}
          <Card /> <Card /> <Card />
        </TestemonialContainer>
      </SectionContent>
    </SectionContainer>
  );
}

export default Testemonial;
