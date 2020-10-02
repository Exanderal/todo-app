import React, { FC } from "react";
import TodoDate from "../../components/TodoDate";
import TodoNav from "../../components/TodoNav";
import TodoInput from "../../components/TodoInput";
import TodoItem from "../../components/TodoItem";
import { Container, TodoWrapper } from "./style";

const Main: FC = () => {
  return (
    <Container>
      <TodoWrapper>
        <TodoNav />
        <TodoDate />
        <TodoInput />
        <TodoItem />
      </TodoWrapper>
    </Container>
  );
};

export default Main;
