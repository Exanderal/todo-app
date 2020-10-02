import styled from "styled-components";

type IconProps = {
  visible: boolean;
};
export const ItemWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 0.5rem;
`;
export const IconWrapper = styled.div`
  background: transparent;
  padding: 0 0.35rem;
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.color.darkergrey};
`;

export const Icon = styled.svg<IconProps>`
  height: 0.7rem;
  width: 0.7rem;
  fill: ${(props) => props.theme.color.white};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

export const SettingsIcon = styled.svg`
  height: 1rem;
  width: 1rem;
  fill: ${(props) => props.theme.color.lightgrey};
  transition: all 0.2s;
  :hover {
    cursor: pointer;
    fill: ${(props) => props.theme.color.white};
  }
`;
export const ItemDescription = styled.p<IconProps>`
  display: flex;
  align-items: center;
  transition: all 0.2s;
  position: relative;
  margin-left: 0.5rem;
  font-size: 0.8rem;
  ::before {
    position: absolute;
    transition: all 0.2s;
    content: "";
    display: block;
    background-color: ${(props) => props.theme.color.white};
    height: 0.1rem;
    left: -2.5%;
    width: 105%;
    transform-origin: left;
    transform: scaleX(${(props) => (props.visible ? "100%" : "0")});
  }
`;
