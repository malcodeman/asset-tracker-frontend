import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { getAssetsByWorkspaceId } from "../../workspaces/actions/workspacesActionCreators";
import AddAssetModal from "./AddAssetModal";
import Table from "../../../components/table/Table";
import Tag from "../../../components/tag/Tag";
import Plus from "../../common/Plus";

import hooks from "../../../hooks";
import utils from "../../../utils";

const Wrapper = styled.div`
  height: 100%;
`;

const StyledTag = styled(Tag)`
  margin: 0.25rem;
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
        accessor: "location.name",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Used by",
        accessor: "employees",
        Cell: ({ value }) =>
          value.map((item) => <StyledTag key={item.id}>{item.name}</StyledTag>),
      },
      {
        Header: "Vendor",
        accessor: "vendor.name",
        Cell: ({ value }) => <StyledTag>{value}</StyledTag>,
      },
      {
        Header: "Purchase date",
        accessor: "purchaseDate",
        Cell: ({ value }) => utils.formatDate(value),
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
      <Plus onClick={() => setIsOpen(true)} />
    </Wrapper>
  );
}

export default Assets;
