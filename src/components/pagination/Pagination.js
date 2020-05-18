import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { PAGE_SIZE_OPTIONS } from "./constants";

import Input from "../input/Input";
import Select from "../select/Select";
import { ParagraphXSmall } from "../typography";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.25rem;
`;

const Emoji = styled.span`
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const StyledSelect = styled(Select)`
  width: 86px;
`;

const NoWrapParagraph = styled(ParagraphXSmall)`
  white-space: nowrap;
`;

function Pagination(props) {
  const {
    previousPage,
    nextPage,
    setPageSize,
    gotoPage,
    canPreviousPage,
    canNextPage,
    pageIndex,
    pageSize,
    pageSizeOptions,
    count,
  } = props;

  function handlePageSizeOptionsOnChange({ value }) {
    setPageSize(Number(value));
  }

  function handleJumpToPageOnChange(e) {
    const page = e.target.value ? Number(e.target.value) : 0;

    gotoPage(page);
  }

  return (
    <Container>
      <Item>
        <ParagraphXSmall>{count} Results</ParagraphXSmall>
        <Emoji
          role="img"
          aria-label=""
          disabled={!canPreviousPage}
          onClick={() => previousPage()}
        >
          {"⬅️"}
        </Emoji>
        <Emoji
          role="img"
          aria-label=""
          disabled={!canNextPage}
          onClick={() => nextPage()}
        >
          {"➡️"}
        </Emoji>
      </Item>
      <Item>
        <ParagraphXSmall>Show:</ParagraphXSmall>
        <StyledSelect
          value={{ label: pageSize, value: pageSize }}
          options={pageSizeOptions}
          onChange={handlePageSizeOptionsOnChange}
        />
      </Item>
      <Item>
        <NoWrapParagraph>Jump to page:</NoWrapParagraph>
        <Input
          value={pageIndex}
          type="number"
          onChange={handleJumpToPageOnChange}
        />
      </Item>
    </Container>
  );
}

Pagination.propTypes = {
  pageSizeOptions: PropTypes.array,
};

Pagination.defaultProps = {
  pageSizeOptions: PAGE_SIZE_OPTIONS,
};

export default Pagination;
