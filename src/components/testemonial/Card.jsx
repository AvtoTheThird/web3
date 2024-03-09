import React from "react";
import { CardBox } from "./card-styles";
function Card() {
  return (
    <CardBox>
      <img
        width={"100px"}
        style={{ borderRadius: "50%" }}
        src="https://boston-react.vercel.app/assets/img/avatar-2.jpg"
        alt=""
      />
      <p style={{ color: "#555", padding: "0px 25px", lineHeight: "1.5" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <h4>Jennifer Lutheran</h4>
      <p style={{ color: "#555" }}>CEO at CU</p>
    </CardBox>
  );
}

export default Card;
