import React from "react";
import styled from "styled-components";
import {
  useTable,
  useFlexLayout,
  useResizeColumns,
  useSortBy,
  usePagination,
} from "react-table";

import Pagination from "../pagination/Pagination";

const Container = styled.div`
  display: block;
  overflow: auto;
  height: 100%;
  background-color: ${(props) => props.theme.colors.tableBackground};
`;

const Head = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

const Body = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

const Header = styled.div`
  padding: 0.25rem;
  color: ${(props) => props.theme.colors.contentPrimary};
  border-right: ${(props) => props.theme.borders.border200};
  border-bottom: ${(props) => props.theme.borders.border200};
  background-color: ${(props) => props.theme.colors.tableHeadBackgroundColor};
  ${(props) => props.theme.typography.ParagraphSmall};
`;

const Data = styled.div`
  padding: 0.25rem;
  color: ${(props) => props.theme.colors.contentPrimary};
  border-right: ${(props) => props.theme.borders.border200};
  border-bottom: ${(props) => props.theme.borders.border200};
  background-color: ${(props) => props.theme.colors.tableDataBackgroundColor};
  ${(props) => props.theme.typography.ParagraphSmall};
`;

const DraggingLine = styled.div`
  opacity: 0;
  width: 3px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateX(50%);
  background-color: ${(props) => props.theme.colors.accent};
  &:hover {
    opacity: 1;
  }
  ${(props) => props.isResizing && `opacity: 1`}
`;

const ResizeHandle = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 1rem;
  height: 100%;
  cursor: ew-resize;
  z-index: 1;
  &:hover ${DraggingLine} {
    opacity: 1;
  }
`;

function Table(props) {
  const { columns, data } = props;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex, pageSize },
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
    pageCount,
  } = useTable(
    {
      columns,
      data,
    },
    useFlexLayout,
    useResizeColumns,
    useSortBy,
    usePagination
  );

  return (
    <Container>
      <Pagination
        previousPage={previousPage}
        nextPage={nextPage}
        gotoPage={gotoPage}
        setPageSize={setPageSize}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageIndex={pageIndex}
        pageSize={pageSize}
        count={data.length}
        pageCount={pageCount}
      />
      <div {...getTableProps()}>
        <Head>
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Header
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span role="img" aria-label="">
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                  <ResizeHandle {...column.getResizerProps()}>
                    <DraggingLine isResizing={column.isResizing} />
                  </ResizeHandle>
                </Header>
              ))}
            </div>
          ))}
        </Head>
        <Body {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Data {...cell.getCellProps()}>{cell.render("Cell")}</Data>
                  );
                })}
              </div>
            );
          })}
        </Body>
      </div>
    </Container>
  );
}

export default Table;
