import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 68%;
  padding: 0 0.5rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color.darkergrey};
  background-color: ${(props) => props.theme.color.darkgrey};
  input {
    width: 100%;
    padding: 0.5rem 0 0.5rem 0.5rem;
    border: none;
    outline: none;
    color: white;
    background-color: transparent;
  }
`;
export const Icon = styled.svg`
  fill: ${(props) => props.theme.color.lightgrey};
  transform: rotateX(180deg);
`;
