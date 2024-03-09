import React from "react";
import { Container, Info } from "./contact-info-styles";
import M from "../../svg-export/M.png";
import xalxi from "../../svg-export/svgexport-7.png";
function ContactInfo() {
  return (
    <Container>
      <Info>
        <img src={M} alt="" />
        <div>
          <p>Phone</p> <h1>+01 123 654 8096</h1>
        </div>
      </Info>
      <Info>
        <img src={M} alt="" />
        <div>
          <p>Phone</p> <h1>+01 123 654 8096</h1>
        </div>
      </Info>
      <Info>
        <img src={M} alt="" />
        <div>
          <p>Phone</p> <h1>+01 123 654 8096</h1>
        </div>
      </Info>
      <img src={xalxi} alt="" />
    </Container>
  );
}

export default ContactInfo;
