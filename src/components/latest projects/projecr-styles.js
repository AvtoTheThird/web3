import styled from "styled-components";
export const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;

  width: 386px;
  height: 352px;
  border: 2px solid black;
  background-color: white;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 1);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
`;

export const Text = styled.div``;
