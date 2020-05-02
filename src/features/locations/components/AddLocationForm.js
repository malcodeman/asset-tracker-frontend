import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import { FormControl } from "../../../components/form-control";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";

const StyledInput = styled(Input)`
  margin-bottom: 0.5rem;
`;

function AddLocationForm(props) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: props.name || "",
    },
    validationSchema,
    onSubmit: () => {
      props.onSubmit(formik);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl
        label="Name"
        caption={formik.touched.name && formik.errors.name}
        error={Boolean(formik.errors.name && formik.touched.name)}
      >
        <StyledInput
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="name"
          autoFocus={true}
        />
      </FormControl>
      <Button type="submit" disabled={!formik.isValid || !formik.dirty}>
        <span>Add location</span>
      </Button>
    </form>
  );
}

AddLocationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddLocationForm;
