import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getVendorsByWorkspaceId } from "../actions/vendorsActionCreators";

import AddVendorModal from "./AddVendorModal";

function Vendors() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const params = useParams();
  const workspaceId = params.workspaceId;
  const vendors = useSelector((state) => state.vendors.vendors);

  function onClose() {
    setIsOpen(false);
  }

  function handleOnClick() {
    setIsOpen(true);
  }

  React.useEffect(() => {
    dispatch(getVendorsByWorkspaceId(workspaceId));
  }, [dispatch, workspaceId]);

  return (
    <div>
      <span onClick={handleOnClick}>Add</span>
      {vendors.map((o) => (
        <span key={o.id}>{o.name}</span>
      ))}
      <AddVendorModal
        isOpen={isOpen}
        workspaceId={workspaceId}
        onClose={onClose}
      />
    </div>
  );
}

export default Vendors;
