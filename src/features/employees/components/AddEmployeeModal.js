import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Modal } from "@malcodeman/react-modal";

import { Dialog, ModalHeader, ModalBody } from "../../../components/modal";

import { addEmployee } from "../actions/employeesActionCreators";
import AddEmployeeForm from "./AddEmployeeForm";

function AddEmployeeModal(props) {
  const { isOpen, onClose, workspaceId } = props;
  const dispatch = useDispatch();

  function handleSubmit(formik) {
    const payload = { values: { workspaceId, ...formik.values } };
    const meta = { formik, onClose };

    dispatch(addEmployee(payload, meta));
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Dialog>
        <ModalHeader>Add employee</ModalHeader>
        <ModalBody>
          <AddEmployeeForm onSubmit={handleSubmit} />
        </ModalBody>
      </Dialog>
    </Modal>
  );
}

AddEmployeeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddEmployeeModal;
