import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Modal } from "@malcodeman/react-modal";

import { Dialog, ModalHeader, ModalBody } from "../../../components/modal";

import { addLocation } from "../actions/locationsActionCreators";
import AddLocationForm from "./AddLocationForm";

function AddLocationModal(props) {
  const { isOpen, onClose, workspaceId } = props;
  const dispatch = useDispatch();

  function handleSubmit(formik) {
    const payload = { values: { workspaceId, ...formik.values } };
    const meta = { formik, onClose };

    dispatch(addLocation(payload, meta));
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Dialog>
        <ModalHeader>Add location</ModalHeader>
        <ModalBody>
          <AddLocationForm onSubmit={handleSubmit} />
        </ModalBody>
      </Dialog>
    </Modal>
  );
}

AddLocationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddLocationModal;
