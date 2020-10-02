import styled from "styled-components";

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0;
`;
export const DateData = styled.div`
  text-align: center;
  h1 {
    font-weight: 600;
  }
  h3 {
    color: ${(props) => props.theme.color.lightgrey};
  }
`;
export const Icon = styled.svg`
  fill: ${(props) => props.theme.color.lightgrey};
  margin: 0 2rem;
  height: 1.5rem;
  width: 1.5rem;
  transition: all 0.2s;
  :hover {
    fill: ${(props) => props.theme.color.white};
    cursor: pointer;
  }
`;
