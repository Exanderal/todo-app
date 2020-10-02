import React, { FC } from "react";
import { FaCheck, FaRegCheckSquare, FaEllipsisH } from "react-icons/fa";
import { ItemWrapper, IconWrapper, Icon, SettingsIcon } from "./style";
const TodoItem: FC = () => {
  return (
    <ItemWrapper>
      <IconWrapper>
        <Icon as={FaCheck} />
      </IconWrapper>
      <p>Getting an invite on dribbble</p>
      <SettingsIcon as={FaEllipsisH} />
    </ItemWrapper>
  );
};

export default TodoItem;
