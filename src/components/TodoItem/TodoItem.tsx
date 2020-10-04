import React, { FC, useState } from "react";
import { FaCheck, FaEllipsisH } from "react-icons/fa";
import { ITodos } from "../../types/models/Todo";
import { removeIdFromList, saveTodosToLocalStorage } from "../../utils/helpers";
import TodoDropdown from "../TodoDropdown";
import {
  ItemWrapper,
  IconWrapper,
  Icon,
  SettingsIcon,
  ItemDescription,
} from "./style";

type Props = {
  id: string;
  checked: boolean;
  description: string;
  todos: ITodos[];
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
};
const TodoItem: FC<Props> = ({ id, checked, description, todos, setTodos }) => {
  const dropdownOptions = [
    { title: "Pin on the top", optionMethod: () => {} },
    {
      title: "Delete",
      optionMethod: () => {
        const newTodos = removeIdFromList(todos, id);
        saveTodosToLocalStorage(newTodos);
        setTodos([...newTodos]);
      },
    },
  ];
  const [visible, setVisible] = useState(checked);
  return (
    <ItemWrapper>
      <IconWrapper
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <Icon as={FaCheck} visible={visible} />
      </IconWrapper>
      <ItemDescription visible={visible}>{description}</ItemDescription>
      <TodoDropdown options={dropdownOptions}>
        <SettingsIcon as={FaEllipsisH} />
      </TodoDropdown>
    </ItemWrapper>
  );
};

export default TodoItem;
