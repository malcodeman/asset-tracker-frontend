import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import { FormControl } from "../../../components/form-control";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";

const FormWrapper = styled.div`
  margin-bottom: 1rem;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

function SigninForm(props) {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    validationSchema,
    initialValues: {
      email: props.email || "",
      password: props.password || "",
    },
    onSubmit: () => {
      props.onSubmit(formik);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormWrapper>
        <FormControl
          label="Your email"
          caption={formik.touched.email && formik.errors.email}
          error={Boolean(formik.errors.email && formik.touched.email)}
        >
          <Input
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
          />
        </FormControl>
        <FormControl
          label="Password"
          caption={formik.touched.password && formik.errors.password}
          error={Boolean(formik.errors.password && formik.touched.password)}
        >
          <Input
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="password"
            type="password"
          />
        </FormControl>
      </FormWrapper>
      <StyledButton type="submit" disabled={!formik.isValid || !formik.dirty}>
        <span>Sign in</span>
      </StyledButton>
    </form>
  );
}

SigninForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default SigninForm;
