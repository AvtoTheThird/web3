import React from "react";
import { Container, Info } from "./contact-info-styles";
import M from "../../svg-export/M.png";
import xalxi from "../../svg-export/svgexport-7.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function ContactInfo() {
  return (
    <Container>
      <Info>
        <FontAwesomeIcon icon={faPhone} className="contact-icon" />
        <div>
          <p style={{ fontSize: "17px", fontWeight: "bold", color: "#555" }}>
            Phone
          </p>{" "}
          <span
            style={{ fontSize: "22px", color: "#18171c", fontWeight: "bold" }}
          >
            +01 123 654 8096
          </span>
        </div>
      </Info>
      <hr />
      <Info>
        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
        <div>
          <p style={{ fontSize: "17px", fontWeight: "bold", color: "#555" }}>
            Mail
          </p>{" "}
          <span
            style={{ fontSize: "22px", color: "#18171c", fontWeight: "bold" }}
          >
            info@domainname.com
          </span>
        </div>
      </Info>
      <hr />
      <Info>
        <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
        <div>
          <p style={{ fontSize: "17px", fontWeight: "bold", color: "#555" }}>
            Visit My Studio
          </p>{" "}
          <span
            style={{ fontSize: "22px", color: "#18171c", fontWeight: "bold" }}
          >
            Warnwe Park Streetperrine,
            <br /> FL 33157 New York City
          </span>
        </div>
      </Info>
      <img src={xalxi} alt="" />
    </Container>
  );
}

export default ContactInfo;
