import React from "react";
import Logo from "../../svg-export/svgexport-1.png";
import { StyledHeader, Links, Contact, Wrapper } from "./header-styles";

function Header() {
  return (
    <Wrapper>
      <StyledHeader>
        <Links>
          <img src={Logo} height={"35px"} alt="" />
          <h5>HOME</h5>
          <h5>SERVICES</h5>
          <h5>SKILLS</h5>
          <h5>PORTFOLIO</h5>
          <h5>CONTACT</h5>
        </Links>

        <Contact>
          <h3>Contact Now</h3>
        </Contact>
      </StyledHeader>
    </Wrapper>
  );
}

export default Header;
