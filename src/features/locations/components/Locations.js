import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getLocationsByWorkspaceId } from "../../workspaces/actions/workspacesActionCreators";
import AddLocationModal from "./AddLocationModal";
import Table from "../../../components/table/Table";

import hooks from "../../../hooks";

const Wrapper = styled.div`
  height: 100%;
`;

function Locations() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const params = useParams();
  const workspaceId = params.workspaceId;
  const locations = useSelector((state) => state.locations.locations);
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
    dispatch(getLocationsByWorkspaceId(workspaceId));
  }, [dispatch, workspaceId]);

  return (
    <Wrapper>
      <Table columns={columns} data={locations} />
      <AddLocationModal
        isOpen={isOpen}
        workspaceId={workspaceId}
        onClose={onClose}
      />
    </Wrapper>
  );
}

export default Locations;
