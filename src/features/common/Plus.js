import React from "react";
import styled from "styled-components";
import { Plus as PlusIcon } from "react-feather";

const Wrapper = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
  cursor: pointer;
  color: #fff;
  background-color: #e52e4d;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s ease-in;
  &:hover {
    transform: scale(1.2);
  }
`;

function Plus(props) {
  return (
    <Wrapper {...props}>
      <PlusIcon />
    </Wrapper>
  );
}

export default Plus;
