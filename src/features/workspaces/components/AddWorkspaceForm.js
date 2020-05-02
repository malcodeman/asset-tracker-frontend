import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled, { useTheme } from "styled-components";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

import { FormControl } from "../../../components/form-control";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";

const StyledInput = styled(Input)`
  margin-bottom: 0.5rem;
`;

function AddWorkspaceForm(props) {
  const theme = useTheme();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    emoji: Yup.string().required("Emoji is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: props.name || "",
      emoji: props.emoji || "",
    },
    validationSchema,
    onSubmit: () => {
      props.onSubmit(formik);
    },
  });

  function onSelect({ native }) {
    formik.setFieldValue("emoji", native);
  }

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
      <FormControl
        label="Emoji"
        caption={formik.touched.emoji && formik.errors.emoji}
        error={Boolean(formik.errors.emoji && formik.touched.emoji)}
      >
        <Picker
          style={{ width: "100%", marginBottom: "0.5rem" }}
          emojiSize={20}
          onSelect={onSelect}
          color={theme.colors.accent}
          showPreview={false}
          showSkinTones={false}
        />
      </FormControl>
      <Button type="submit" disabled={!formik.isValid || !formik.dirty}>
        <span>Create workspace</span>
      </Button>
    </form>
  );
}

AddWorkspaceForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddWorkspaceForm;
