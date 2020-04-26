import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { Modal, ModalHeader, ModalBody } from "../../../components/modal";

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
      <ModalHeader>Add location</ModalHeader>
      <ModalBody>
        <AddLocationForm onSubmit={handleSubmit} />
      </ModalBody>
    </Modal>
  );
}

AddLocationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddLocationModal;
