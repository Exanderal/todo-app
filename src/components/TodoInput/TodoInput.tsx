import React, { FC, useState } from "react";
import { v4 as uuid } from "uuid";
import { FaAlignLeft } from "react-icons/fa";
import { InputWrapper, Icon } from "./style";
import { saveTodosToLocalStorage } from "../../utils/helpers";
interface ITodos {
  id: string;
  desc: string;
  checked: boolean;
}
type Props = {
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
  todos: ITodos[];
};
const TodoInput: FC<Props> = ({ todos, setTodos }) => {
  const [desc, setDesc] = useState("");
  return (
    <InputWrapper>
      <Icon as={FaAlignLeft} />
      <input
        placeholder="Add a task"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setTodos([
              ...todos,
              {
                id: uuid(),
                desc: desc,
                checked: false,
              },
            ]);
            saveTodosToLocalStorage([
              ...todos,
              {
                id: uuid(),
                desc: desc,
                checked: false,
              },
            ]);
            setDesc("");
          }
        }}
      />
    </InputWrapper>
  );
};

export default TodoInput;
