import styled from "styled-components";
export const CardBox = styled.div`
  width: 308px;
  height: 285px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  padding: 40px 35px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 1);
  }
`;
