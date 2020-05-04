import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import { FormControl } from "../../../components/form-control";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import Select from "../../../components/select/Select";

const StyledInput = styled(Input)`
  margin-bottom: 0.5rem;
`;

const StyledSelect = styled(Select)`
  margin-bottom: 0.5rem;
`;

function AddAssetForm(props) {
  const { onChange, locations, employees, vendors } = props;
  const validationSchema = Yup.object().shape({
    tag: Yup.string().required("Tag is required"),
    description: Yup.string().required("Description is required"),
    locationId: Yup.string().required("Location is required"),
    vendorId: Yup.string().required("Vendor is required"),
  });
  const formik = useFormik({
    initialValues: {
      tag: props.tag || "",
      description: props.description || "",
      locationId: props.locationId || "",
      vendorId: props.vendorId || "",
    },
    validationSchema,
    onSubmit: () => {
      const form = {
        ...formik,
        values: {
          ...formik.values,
          locationId: formik.values.locationId.id,
          vendorId: formik.values.vendorId.id,
          usedBy: formik.values.usedBy.map((item) => item.id),
        },
      };

      props.onSubmit(form);
    },
  });

  React.useEffect(() => {
    onChange(formik.values);
  }, [formik.values, onChange]);

  function handleChange(field, e) {
    formik.setFieldValue(field, e);
  }

  function handleBlur(field) {
    formik.setFieldTouched(field, true);
  }

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
          autoFocus={true}
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
        caption={formik.touched.locationId && formik.errors.locationId}
        error={Boolean(formik.errors.locationId && formik.touched.locationId)}
      >
        <StyledSelect
          value={formik.values.locationId}
          onChange={(e) => handleChange("locationId", e)}
          onBlur={() => handleBlur("locationId")}
          options={locations}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
        />
      </FormControl>
      <FormControl
        label="Used by"
        caption={formik.touched.usedBy && formik.errors.usedBy}
        error={Boolean(formik.errors.usedBy && formik.touched.usedBy)}
      >
        <StyledSelect
          isMulti
          backspaceRemovesValue
          value={formik.values.usedBy}
          onChange={(e) => handleChange("usedBy", e)}
          onBlur={() => handleBlur("usedBy")}
          options={employees}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
        />
      </FormControl>
      <FormControl
        label="Vendor"
        caption={formik.touched.vendorId && formik.errors.vendorId}
        error={Boolean(formik.errors.vendorId && formik.touched.vendorId)}
      >
        <StyledSelect
          value={formik.values.vendorId}
          onChange={(e) => handleChange("vendorId", e)}
          onBlur={() => handleBlur("vendorId")}
          options={vendors}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
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
