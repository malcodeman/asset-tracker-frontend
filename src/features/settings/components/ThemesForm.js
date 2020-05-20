import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import { FormControl } from "../../../components/form-control";
import { Button } from "../../../components/button";
import Select from "../../../components/select/Select";

const StyledSelect = styled(Select)`
  margin-bottom: 0.5rem;
`;

function ThemesForm(props) {
  const { themes } = props;
  const validationSchema = Yup.object().shape({
    theme: Yup.string().required("Theme is required"),
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      theme: props.theme || "",
    },
    validationSchema,
    onSubmit: () => {
      props.onSubmit(formik);
    },
  });

  function handleChange(field, e) {
    formik.setFieldValue(field, e);
  }

  function handleBlur(field) {
    formik.setFieldTouched(field, true);
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl
        label="Theme"
        caption={formik.touched.theme && formik.errors.theme}
        error={Boolean(formik.errors.theme && formik.touched.theme)}
      >
        <StyledSelect
          value={formik.values.theme}
          onChange={(e) => handleChange("theme", e)}
          onBlur={() => handleBlur("theme")}
          options={themes}
        />
      </FormControl>
      <Button type="submit" disabled={!formik.isValid || !formik.dirty}>
        <span>Change theme</span>
      </Button>
    </form>
  );
}

ThemesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ThemesForm;
