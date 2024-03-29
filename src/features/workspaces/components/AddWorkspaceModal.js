import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Modal } from "@malcodeman/react-modal";

import { Dialog, ModalHeader, ModalBody } from "../../../components/modal";
import AddWorkspaceForm from "./AddWorkspaceForm";
import { addWorkspace } from "../actions/workspacesActionCreators";

function AddWorkspaceModal(props) {
  const { isOpen, onClose } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSubmit(formik) {
    const payload = {
      values: { ...formik.values },
    };
    const meta = {
      history,
    };

    dispatch(addWorkspace(payload, meta));
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Dialog>
        <ModalHeader>Create workspace</ModalHeader>
        <ModalBody>
          <AddWorkspaceForm onSubmit={handleSubmit} />
        </ModalBody>
      </Dialog>
    </Modal>
  );
}

AddWorkspaceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddWorkspaceModal;
