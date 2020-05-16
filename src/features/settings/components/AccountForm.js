import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FormControl } from "../../../components/form-control";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";

const FormWrapper = styled.div`
  margin-bottom: 1rem;
`;

function AccountForm(props) {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    company: Yup.string(),
  });
  const formik = useFormik({
    enableReinitialize: true,
    validationSchema,
    initialValues: {
      email: props.email || "",
      firstName: props.firstName || "",
      lastName: props.lastName || "",
      company: props.company || "",
    },
    onSubmit: () => {
      props.onSubmit(formik);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormWrapper>
        <FormControl
          label="Email"
          caption={formik.touched.email && formik.errors.email}
          error={Boolean(formik.errors.email && formik.touched.email)}
          disabled
        >
          <Input
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
          />
        </FormControl>
        <FormControl
          label="First name"
          caption={formik.touched.firstName && formik.errors.firstName}
          error={Boolean(formik.errors.firstName && formik.touched.firstName)}
        >
          <Input
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="firstName"
          />
        </FormControl>
        <FormControl
          label="Last name"
          caption={formik.touched.lastName && formik.errors.lastName}
          error={Boolean(formik.errors.lastName && formik.touched.lastName)}
        >
          <Input
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="lastName"
          />
        </FormControl>
        <FormControl
          label="Company"
          caption={formik.touched.company && formik.errors.company}
          error={Boolean(formik.errors.company && formik.touched.company)}
        >
          <Input
            value={formik.values.company}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="company"
          />
        </FormControl>
      </FormWrapper>
      <Button type="submit" disabled={!formik.isValid || !formik.dirty}>
        <span>{formik.isSubmitting ? "Saving" : "Save"}</span>
      </Button>
    </form>
  );
}

AccountForm.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  company: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default AccountForm;
