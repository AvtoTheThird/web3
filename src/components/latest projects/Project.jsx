import React from "react";
import styled from "styled-components";
import { Container, InfoContainer, Text } from "./projecr-styles";
import Arrow from "../../svg-export/arrow.png";
function Project() {
  return (
    <Container>
      <img
        width={"100%"}
        src="https://boston-react.vercel.app/assets/img/project-1.jpg"
      />
      <InfoContainer>
        <Text>
          <h2 style={{ paddingBottom: "5px" }}>Agency Landing page</h2>
          <p style={{ color: "#555" }}>Web/WordPress</p>
        </Text>
        <img src={Arrow} alt="" />
      </InfoContainer>
    </Container>
  );
}

export default Project;
