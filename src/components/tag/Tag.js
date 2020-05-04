import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { KIND, VARIANT } from "./constants";

function getColors(props) {
  const { kind } = props;

  switch (kind) {
    case KIND.primary:
    default:
      return css`
        color: ${(props) => props.theme.colors.tagPrimaryLightFont};
        background-color: ${(props) =>
          props.theme.colors.tagPrimaryLightBackground};
      `;
  }
}

const StyledTag = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0 0.25rem;
  height: 24px;
  color: ${(props) => props.theme.colors.contentPrimary};
  border-radius: ${(props) => props.theme.borders.radius200};
  ${(props) => props.theme.typography.ParagraphXSmall};
  ${getColors};
`;

function Tag(props) {
  const { kind, variant, disabled, children } = props;

  return (
    <StyledTag {...props} kind={kind} variant={variant} disabled={disabled}>
      {children}
    </StyledTag>
  );
}

Tag.propTypes = {
  kind: PropTypes.oneOf([
    KIND.neutral,
    KIND.primary,
    KIND.accent,
    KIND.positive,
    KIND.warning,
    KIND.negative,
  ]),
  variant: PropTypes.oneOf([VARIANT.solid, VARIANT.light, VARIANT.outlined]),
  disabled: PropTypes.bool,
};

Tag.defaultProps = {
  kind: KIND.primary,
  variant: VARIANT.light,
  disabled: false,
};

export default Tag;
