import React from "react";
import styled from "styled-components";

import PlusIcon from "../../../icons/Plus";
import { ParagraphSmall } from "../../../components/typography";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 1rem;
  margin-bottom: 0.5rem;
  transition: 0.085s all ease-in;
  color: ${(props) => props.theme.colors.contentPrimary};
  border-radius: ${(props) => props.theme.borders.radius200};
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

function AddAssetButtonGrid(props) {
  return (
    <Wrapper {...props}>
      <StyledButton>
        <PlusIcon size={20} />
      </StyledButton>
      <ParagraphSmall>Add an asset</ParagraphSmall>
    </Wrapper>
  );
}

export default AddAssetButtonGrid;
