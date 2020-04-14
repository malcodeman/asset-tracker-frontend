import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { Modal, ModalHeader, ModalBody } from "../../../components/modal";
import AddAssetForm from "./AddAssetForm";
import { addAsset } from "../actions/assetsActionCreators";

function AddAssetModal(props) {
  const { isOpen, onClose, workspace } = props;
  const dispatch = useDispatch();
  const initialName = "Unnamed record";
  const [name, setName] = React.useState(initialName);

  function handleSubmit(formik) {
    const payload = {
      values: { workspaceId: workspace.id, ...formik.values },
    };

    dispatch(addAsset(payload, { formik }));
    onClose();
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

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>{name}</ModalHeader>
      <ModalBody>
        <AddAssetForm onSubmit={handleSubmit} onChange={handleOnChange} />
      </ModalBody>
    </Modal>
  );
}

AddAssetModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddAssetModal;
