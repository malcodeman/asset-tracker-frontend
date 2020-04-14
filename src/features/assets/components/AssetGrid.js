import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  ParagraphSmall,
  ParagraphXSmall,
} from "../../../components/typography";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 0.085s all ease-in;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  border-radius: ${(props) => props.theme.borders.radius200};
`;

const StyledParagraphXSmall = styled(ParagraphXSmall)`
  margin-bottom: 0.25rem;
`;

function AssetGrid(props) {
  const { tag, description, location } = props;

  return (
    <Wrapper>
      <ParagraphSmall>{tag}</ParagraphSmall>
      <StyledParagraphXSmall>Description</StyledParagraphXSmall>
      <ParagraphXSmall>{description}</ParagraphXSmall>
      <StyledParagraphXSmall>Location</StyledParagraphXSmall>
      <ParagraphXSmall>{location}</ParagraphXSmall>
    </Wrapper>
  );
}

AssetGrid.propTypes = {
  tag: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default AssetGrid;
