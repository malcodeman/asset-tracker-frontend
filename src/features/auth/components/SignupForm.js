import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import { FormControl } from "../../../components/form-control";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "email email"
    "password password"
    "firstName lastName"
    "company company";
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const GridItem = styled.div`
  grid-area: ${(props) => props.gridArea};
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

function SignupForm(props) {
  const signupSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().required("Password is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: props.email || "",
      password: props.password || "",
      firstName: props.firstName || "",
      lastName: props.lastName || "",
      company: props.company || "",
    },
    validationSchema: signupSchema,
    onSubmit: () => {
      props.onSubmit(formik);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormGrid>
        <GridItem gridArea="email">
          <FormControl
            label="Email address"
            caption={formik.touched.email && formik.errors.email}
            error={Boolean(formik.errors.email && formik.touched.email)}
          >
            <Input
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
              placeholder="rickdeckard@domain.com"
            />
          </FormControl>
        </GridItem>
        <GridItem gridArea="password">
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
        </GridItem>
        <GridItem gridArea="firstName">
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
              placeholder="Rick"
            />
          </FormControl>
        </GridItem>
        <GridItem gridArea="lastName">
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
              placeholder="Deckard"
            />
          </FormControl>
        </GridItem>
        <GridItem gridArea="company">
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
              placeholder="Tyrell Corporation"
            />
          </FormControl>
        </GridItem>
      </FormGrid>
      <StyledButton type="submit" disabled={!formik.isValid || !formik.dirty}>
        <span>Create account</span>
      </StyledButton>
    </form>
  );
}

SignupForm.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  company: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default SignupForm;
