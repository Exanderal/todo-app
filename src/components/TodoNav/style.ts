import styled from "styled-components";
type Props = {
  active: number;
  index: number;
};

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.color.darkergrey};
  padding: 0.6rem 0;
`;
export const NavList = styled.ul`
  display: flex;
  flex: 1;
  list-style-type: none;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 2.5rem;
`;

export const NavItem = styled.li<Props>`
  position: relative;
  display: flex;
  cursor: pointer;
  justify-content: center;
  color: ${(props) =>
    props.active === props.index
      ? props.theme.color.white
      : props.theme.color.lightgrey};
  :not(:last-child) {
    margin-right: 0.5rem;
  }
  ::before {
    position: absolute;
    top: 1.8rem;
    content: "";
    display: block;
    width: 3rem;
    height: 0.2rem;
    background-color: ${(props) =>
      props.active === props.index ? props.theme.color.primary : "transparent"};
  }
`;
