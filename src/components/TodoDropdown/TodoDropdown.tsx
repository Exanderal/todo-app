import React, { FC, useState } from "react";
import { DropdownWrapper, HiddenDropdown } from "./style";
interface IOption {
  title: string;
  optionMethod: () => void;
}
type DropdownProps = {
  options: Array<IOption>;
};
const TodoDropdown: FC<DropdownProps> = ({ children, options = [] }) => {
  const [visible, setVisible] = useState(false);
  return (
    <DropdownWrapper
      onMouseOver={() => {
        setVisible(true);
      }}
      onFocus={() => {
        setVisible(true);
      }}
      onMouseLeave={() => {
        setVisible(false);
      }}
      onBlur={() => {
        setVisible(false);
      }}
      style={{ position: "relative" }}
    >
      {children}
      <HiddenDropdown visible={visible}>
        {options.map((option) => {
          let x = Math.random();
          return (
            <p
              onClick={option.optionMethod}
              style={{ cursor: "pointer" }}
              key={`${x}-${option.title}`}
            >
              {option.title}
            </p>
          );
        })}
      </HiddenDropdown>
    </DropdownWrapper>
  );
};

export default TodoDropdown;
