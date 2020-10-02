import React, { FC } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { InputWrapper, Icon } from "./style";
const TodoInput: FC = () => {
  return (
    <InputWrapper>
      <Icon as={FaAlignLeft} />
      <input placeholder="Add a task" />
    </InputWrapper>
  );
};

export default TodoInput;
