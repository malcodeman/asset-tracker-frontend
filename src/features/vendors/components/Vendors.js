import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getVendorsByWorkspaceId } from "../../workspaces/actions/workspacesActionCreators";

import AddVendorModal from "./AddVendorModal";
import Table from "../../../components/table/Table";
import Plus from "../../common/Plus";

import hooks from "../../../hooks";

const Wrapper = styled.div`
  height: 100%;
`;

function Vendors() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const params = useParams();
  const workspaceId = params.workspaceId;
  const vendors = useSelector((state) => state.vendors.vendors);
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
    ],
    []
  );

  function onClose() {
    setIsOpen(false);
  }

  hooks.useKeyPress("+", () => setIsOpen(true));

  React.useEffect(() => {
    dispatch(getVendorsByWorkspaceId(workspaceId));
  }, [dispatch, workspaceId]);

  return (
    <Wrapper>
      <Table columns={columns} data={vendors} />
      <AddVendorModal
        isOpen={isOpen}
        workspaceId={workspaceId}
        onClose={onClose}
      />
      <Plus onClick={() => setIsOpen(true)} />
    </Wrapper>
  );
}

export default Vendors;
