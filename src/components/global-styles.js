import styled from "styled-components";

export const TiltedText = styled.h4`
  display: inline-block;
  border: 1px solid #5c64cf;
  padding: 8px 20px;
  color: #5c64cf;
  -webkit-transform: rotate(-15deg);
  transform: rotate(-15deg);
`;
export const BigText = styled.h1`
  vertical-align: top;
  padding: 15px 0px;
  font-size: 55px;
`;
export const SectionContainer = styled.div`
  /* height: 150vh; */
  padding: 100px 0px;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  font-family: Arial, Helvetica, sans-serif;
`;
export const SectionContent = styled.div`
  width: 1280px;
  margin: auto;
`;
