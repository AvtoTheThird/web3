import styled from "styled-components";

export const Wrapper = styled.header`
  background-color: #fff;
  border-bottom: 2px solid black;
  position: sticky;
  z-index: 1;
  top: 0;
`;
export const StyledHeader = styled.div`
  height: 55px;
  padding: 15px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 1280px;
  z-index: 1;
`;
export const Links = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  display: flex;
  gap: 3rem;
`;
export const Contact = styled.button`
  padding: 14px 28px;
  border: 2px solid black;
  background-color: #f7af24;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;
