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

function AddEmployeeForm(props) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });
  const formik = useFormik({
    initialValues: {
      name: props.name || "",
      email: props.email || "",
      birthDay: props.birthDay || "",
      hireDay: props.hireDay || "",
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
        />
      </FormControl>
      <FormControl
        label="Email"
        caption={formik.touched.email && formik.errors.email}
        error={Boolean(formik.errors.email && formik.touched.email)}
      >
        <StyledInput
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
        />
      </FormControl>
      <FormControl
        label="Birth day"
        caption={formik.touched.birthDay && formik.errors.birthDay}
        error={Boolean(formik.errors.birthDay && formik.touched.birthDay)}
      >
        <StyledInput
          value={formik.values.birthDay}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="birthDay"
          type="date"
        />
      </FormControl>
      <FormControl
        label="Hire day"
        caption={formik.touched.hireDay && formik.errors.hireDay}
        error={Boolean(formik.errors.hireDay && formik.touched.hireDay)}
      >
        <StyledInput
          value={formik.values.hireDay}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="hireDay"
          type="date"
        />
      </FormControl>
      <Button type="submit" disabled={!formik.isValid || !formik.dirty}>
        <span>Add employee</span>
      </Button>
    </form>
  );
}

AddEmployeeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddEmployeeForm;
