import React from "react";
import styled from "styled-components";
import Project from "./Project";
import { ProjectContainer } from "./latest-project-styles";
import {
  BigText,
  TiltedText,
  SectionContainer,
  SectionContent,
} from "../global-styles";
function LatestProjects() {
  return (
    <SectionContainer backgroundColor="#fef7e9">
      <SectionContent>
        <TiltedText>Portfolio</TiltedText>
        <BigText>Latest Projects</BigText>
        <ProjectContainer>
          {" "}
          <Project /> <Project /> <Project /> <Project /> <Project />{" "}
          <Project />
        </ProjectContainer>
      </SectionContent>
    </SectionContainer>
  );
}

export default LatestProjects;
