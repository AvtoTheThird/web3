import React from "react";
import {
  BigText,
  TiltedText,
  SectionContainer,
  SectionContent,
} from "../global-styles";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
function Contact() {
  return (
    <SectionContainer backgroundColor="#fef7e9">
      <SectionContent>
        <TiltedText>Contact</TiltedText>
        <BigText>Let's Discuss Project</BigText>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ContactForm />
          <ContactInfo />
        </div>
      </SectionContent>
    </SectionContainer>
  );
}

export default Contact;
