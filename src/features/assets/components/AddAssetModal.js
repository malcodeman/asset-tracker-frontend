import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { Modal, ModalHeader, ModalBody } from "../../../components/modal";
import AddAssetForm from "./AddAssetForm";
import { addAsset } from "../actions/assetsActionCreators";
import {
  getLocationsByWorkspaceId,
  getVendorsByWorkspaceId,
} from "../../workspaces/actions/workspacesActionCreators";

function AddAssetModal(props) {
  const { isOpen, onClose, workspaceId } = props;
  const dispatch = useDispatch();
  const initialName = "Unnamed record";
  const [name, setName] = React.useState(initialName);
  const locations = useSelector((state) => state.locations.locations);
  const vendors = useSelector((state) => state.vendors.vendors);

  function handleSubmit(formik) {
    const payload = {
      values: { workspaceId, ...formik.values },
    };
    const meta = { formik, onClose };

    dispatch(addAsset(payload, meta));
  }

  function handleOnChange(values) {
    if (values.tag) {
      setName(values.tag);
    }
  }

  React.useEffect(() => {
    if (!isOpen) {
      setName(initialName);
    }
  }, [isOpen]);

  React.useEffect(() => {
    if (isOpen && !locations.length) {
      dispatch(getLocationsByWorkspaceId(workspaceId));
    }
  }, [isOpen, dispatch, workspaceId, locations.length]);

  React.useEffect(() => {
    if (isOpen && !vendors.length) {
      dispatch(getVendorsByWorkspaceId(workspaceId));
    }
  }, [isOpen, dispatch, workspaceId, vendors.length]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>{name}</ModalHeader>
      <ModalBody>
        <AddAssetForm
          onSubmit={handleSubmit}
          onChange={handleOnChange}
          locations={locations}
          vendors={vendors}
        />
      </ModalBody>
    </Modal>
  );
}

AddAssetModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddAssetModal;
