import styled from "styled-components";

export const DropdownWrapper = styled.div`
  margin-left: auto;
`;

type HiddenProps = {
  visible: boolean;
};

export const HiddenDropdown = styled.span<HiddenProps>`
  position: absolute;
  display: ${(props) => (props.visible ? "visible" : "none")};
  width: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.color.darkergrey};
  white-space: nowrap;
  left: 0;
  margin-top: 0;
  z-index: 323;
  color: black;
  border-radius: 2px;
  margin: 0;
  padding: 0;
  p {
    font-size: 0.8rem;
    :hover {
      background-color: ${(props) => props.theme.color.lightgrey};
      color: black;
      border-radius: 2px;
    }
    padding: 4px 20px 4px 12px;
  }
`;
