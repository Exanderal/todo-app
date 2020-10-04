import React, { FC } from "react";
import { ITodos } from "../../types/models/Todo";
import TodoItem from "../TodoItem";
import { ListWrapper } from "./style";

type Props = {
  todos: Array<{ id: string; desc: string; checked: boolean }>;
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
};

const TodoList: FC<Props> = ({ setTodos, todos }) => {
  return (
    <ListWrapper>
      {todos.map((todo) => {
        return (
          <TodoItem
            description={todo.desc}
            checked={todo.checked}
            key={todo.id}
            id={todo.id}
            setTodos={setTodos}
            todos={todos}
          />
        );
      })}
    </ListWrapper>
  );
};

export default TodoList;
