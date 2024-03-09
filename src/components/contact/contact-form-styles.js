import styled from "styled-components";

export const Form = styled.div`
  width: 483px;
  height: 517px;
  padding: 35px;
  background-color: #fff;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const Inputfield = styled.input`
  width: 100%;
  height: 24px;
  padding: 9px 0;
`;
export const TextareInput = styled.textarea`
  width: 100%;
  height: 74px;
  padding: 9px 0;
  rows: 3;
`;
export const Label = styled.label`
  display: block;
  color: #555;
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
