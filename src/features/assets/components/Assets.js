import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

import { getAssetsByWorkspaceId } from "../actions/assetsActionCreators";
import AddAssetModal from "./AddAssetModal";
import Table from "../../../components/table/Table";

import hooks from "../../../hooks";

const Wrapper = styled.div`
  height: 100%;
`;

function Assets() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets.assets);
  const params = useParams();
  const workspaceId = params.workspaceId;
  const columns = React.useMemo(
    () => [
      {
        Header: "Tag",
        accessor: "tag",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Photo URL",
        accessor: "photoURL",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Used by",
        accessor: "usedBy",
      },
      {
        Header: "Vendor",
        accessor: "vendor",
      },
      {
        Header: "Purchase date",
        accessor: "purchaseDate",
        Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
      },
      {
        Header: "Item type",
        accessor: "itemType",
      },
      {
        Header: "Condition notes",
        accessor: "conditionNotes",
      },
    ],
    []
  );

  function onClose() {
    setIsOpen(false);
  }

  hooks.useKeyPress("+", () => setIsOpen(true));

  React.useEffect(() => {
    dispatch(getAssetsByWorkspaceId(workspaceId));
  }, [dispatch, workspaceId]);

  return (
    <Wrapper>
      <Table columns={columns} data={assets} />
      <AddAssetModal
        isOpen={isOpen}
        onClose={onClose}
        workspaceId={workspaceId}
      />
    </Wrapper>
  );
}

export default Assets;
