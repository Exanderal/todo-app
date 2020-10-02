import React, { useState, FC } from "react";
import { Nav, NavList, NavItem } from "./style";

const TodoNav: FC = () => {
  const [active, setActive] = useState(0);
  return (
    <Nav>
      <NavList>
        <NavItem
          active={active}
          index={0}
          onClick={() => {
            setActive(0);
          }}
        >
          Day
        </NavItem>
        <NavItem
          active={active}
          index={1}
          onClick={() => {
            setActive(1);
          }}
        >
          Week
        </NavItem>
        <NavItem
          active={active}
          index={2}
          onClick={() => {
            setActive(2);
          }}
        >
          Month
        </NavItem>
        <NavItem
          active={active}
          index={3}
          onClick={() => {
            setActive(3);
          }}
        >
          Year
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default TodoNav;
