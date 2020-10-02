import React, { FC } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { DateWrapper, DateData, Icon } from "./style";
const TodoDate: FC = () => {
  return (
    <DateWrapper>
      <Icon as={FaAngleLeft} />
      <DateData>
        <h1>Thursday</h1>
        <h3>Mar 23, 2017</h3>
      </DateData>
      <Icon as={FaAngleRight} />
    </DateWrapper>
  );
};

export default TodoDate;
