import React, { FC, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import TodoDate from "../../components/TodoDate";
import TodoNav from "../../components/TodoNav";
import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";
import { Container, TodoWrapper } from "./style";

interface ITodos {
  id: string;
  desc: string;
  checked: boolean;
}

const Main: FC = () => {
  const localTodos = [
    {
      id: uuid(),
      desc: `I'm added by default`,
      checked: false,
    },
  ];
  const [todos, setTodos] = useState<ITodos[]>(localTodos);

  useEffect(() => {
    const stringifyTodos = localStorage.getItem("todosList");
    if (stringifyTodos) {
      setTodos(JSON.parse(stringifyTodos));
    }
  }, []);
  return (
    <Container>
      <TodoWrapper>
        <TodoNav />
        <TodoDate />
        <TodoInput setTodos={setTodos} todos={todos} />
        <TodoList setTodos={setTodos} todos={todos} />
      </TodoWrapper>
    </Container>
  );
};

export default Main;
