import React from "react";
import styled from "styled-components";
import { Container, InfoContainer, Text } from "./projecr-styles";
import Arrow from "../../svg-export/arrow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Project({ link }) {
  return (
    <Container>
      <img width={"100%"} src={link} />
      <InfoContainer>
        <Text>
          <h2 style={{ paddingBottom: "5px" }}>Agency Landing page</h2>
          <p style={{ color: "#555" }}>Web/WordPress</p>
        </Text>
        <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
      </InfoContainer>
    </Container>
  );
}

export default Project;
