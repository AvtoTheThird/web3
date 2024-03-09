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
const links = [
  "https://boston-react.vercel.app/assets/img/project-1.jpg",
  "https://boston-react.vercel.app/assets/img/project-2.jpg",
  "https://boston-react.vercel.app/assets/img/project-3.jpg",
  "https://boston-react.vercel.app/assets/img/project-4.jpg",
  "https://boston-react.vercel.app/assets/img/project-5.jpg",
  "https://boston-react.vercel.app/assets/img/project-6.jpg",
];
function LatestProjects() {
  return (
    <SectionContainer backgroundColor="#fef7e9">
      <SectionContent>
        <TiltedText>Portfolio</TiltedText>
        <BigText>Latest Projects</BigText>
        <ProjectContainer>
          {" "}
          {links.map((link) => {
            return <Project link={link} />;
          })}
        </ProjectContainer>
      </SectionContent>
    </SectionContainer>
  );
}

export default LatestProjects;
