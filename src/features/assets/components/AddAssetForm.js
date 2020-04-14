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

function AddAssetForm(props) {
  const { onChange } = props;
  const validationSchema = Yup.object().shape({
    tag: Yup.string().required("Tag is required"),
    description: Yup.string().required("Description is required"),
    location: Yup.string().required("Location is required"),
  });
  const formik = useFormik({
    initialValues: {
      tag: props.tag || "",
      description: props.description || "",
      location: props.location || "",
    },
    validationSchema,
    onSubmit: () => {
      props.onSubmit(formik);
    },
  });

  React.useEffect(() => {
    onChange(formik.values);
  }, [formik.values, onChange]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl
        label="Tag"
        caption={formik.touched.tag && formik.errors.tag}
        error={Boolean(formik.errors.tag && formik.touched.tag)}
      >
        <StyledInput
          value={formik.values.tag}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="tag"
        />
      </FormControl>
      <FormControl
        label="Description"
        caption={formik.touched.description && formik.errors.description}
        error={Boolean(formik.errors.description && formik.touched.description)}
      >
        <StyledInput
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="description"
        />
      </FormControl>
      <FormControl
        label="Location"
        caption={formik.touched.location && formik.errors.location}
        error={Boolean(formik.errors.location && formik.touched.location)}
      >
        <StyledInput
          value={formik.values.location}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="location"
        />
      </FormControl>
      <Button type="submit" disabled={!formik.isValid || !formik.dirty}>
        <span>Add an asset</span>
      </Button>
    </form>
  );
}

AddAssetForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddAssetForm;
