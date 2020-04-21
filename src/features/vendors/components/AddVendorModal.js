import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { Modal, ModalHeader, ModalBody } from "../../../components/modal";

import { addVendor } from "../actions/vendorsActionCreators";
import AddVendorForm from "./AddVendorForm";

function AddVendorModal(props) {
  const { isOpen, onClose, workspaceId } = props;
  const dispatch = useDispatch();

  function handleSubmit(formik) {
    const payload = { values: { workspaceId, ...formik.values } };
    const meta = { formik };

    dispatch(addVendor(payload, meta));
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>Add vendor</ModalHeader>
      <ModalBody>
        <AddVendorForm onSubmit={handleSubmit} />
      </ModalBody>
    </Modal>
  );
}

AddVendorModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddVendorModal;
