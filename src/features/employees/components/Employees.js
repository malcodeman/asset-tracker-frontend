import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getEmployeesByWorkspaceId } from "../../workspaces/actions/workspacesActionCreators";

import AddEmployeeModal from "./AddEmployeeModal";
import Table from "../../../components/table/Table";

import hooks from "../../../hooks";
import utils from "../../../utils";

const Wrapper = styled.div`
  height: 100%;
`;

function Employees() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const params = useParams();
  const workspaceId = params.workspaceId;
  const employees = useSelector((state) => state.employees.employees);
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Hire date",
        accessor: "hireDate",
        Cell: ({ value }) => utils.formatDate(value),
      },
      {
        Header: "Birth date",
        accessor: "birthDate",
        Cell: ({ value }) => utils.formatDate(value),
      },
    ],
    []
  );

  function onClose() {
    setIsOpen(false);
  }

  hooks.useKeyPress("+", () => setIsOpen(true));

  React.useEffect(() => {
    dispatch(getEmployeesByWorkspaceId(workspaceId));
  }, [dispatch, workspaceId]);

  return (
    <Wrapper>
      <Table columns={columns} data={employees} />
      <AddEmployeeModal
        isOpen={isOpen}
        workspaceId={workspaceId}
        onClose={onClose}
      />
    </Wrapper>
  );
}

export default Employees;
