import styled from "styled-components";

export const ItemWrapper = styled.div`
  flex: 1;
  width: calc(68% + 1rem);
  display: flex;
  align-items: center;
  padding: 1rem 0;
  p {
    margin-left: 0.5rem;
    font-size: 0.8rem;
  }
`;
export const IconWrapper = styled.div`
  background: transparent;
  padding: 0 0.35rem;
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.color.darkergrey};
`;

export const Icon = styled.svg`
  height: 0.7rem;
  width: 0.7rem;

  fill: ${(props) => props.theme.color.white};
`;
export const SettingsIcon = styled.svg`
  height: 1rem;
  width: 1rem;
  fill: ${(props) => props.theme.color.lightgrey};
  margin-left: auto;
`;
