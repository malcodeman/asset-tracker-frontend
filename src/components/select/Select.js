import React from "react";
import PropTypes from "prop-types";
import ReactSelect from "react-select";
import { components } from "react-select";
import { useTheme } from "styled-components";

import { ChevronDown } from "react-feather";

function Select(props) {
  const theme = useTheme();
  const { onChange, options, error, positive } = props;

  function getColors(isFocused) {
    if (isFocused) {
      return {
        color: theme.colors.foreground,
        borderColor: theme.colors.borderFocus,
        backgroundColor: theme.colors.inputFillActive,
      };
    } else if (error) {
      return {
        color: theme.colors.foreground,
        borderColor: theme.colors.inputBorderError,
        backgroundColor: theme.colors.inputFillError,
      };
    } else if (positive) {
      return {
        color: theme.colors.foreground,
        borderColor: theme.colors.inputBorderPositive,
        backgroundColor: theme.colors.inputFillPositive,
      };
    } else {
      return {
        color: theme.colors.foreground,
        borderColor: theme.colors.inputFill,
        backgroundColor: theme.colors.inputFill,
      };
    }
  }

  function getFont() {
    return {
      fontFamily: "'Roboto', sans-serif",
      fontSize: "1rem",
      fontWeight: "normal",
      lineHeight: 1.5,
    };
  }

  const styles = {
    valueContainer: (base) => ({
      ...base,
      padding: "0.25rem 0.5rem",
    }),
    input: (base) => ({
      ...base,
      margin: "0",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      padding: "0.25rem 0.5rem",
      color: theme.colors.foreground,
      "&:hover": {
        color: theme.colors.foreground,
      },
    }),
    control: (base, state) => ({
      ...base,
      minHeight: "36px",
      boxShadow: "none",
      borderWidth: "2px",
      borderRadius: theme.borders.radius200,
      ...getColors(state.isFocused),
      "&:hover": {
        ...getColors(state.isFocused),
      },
    }),
    singleValue: (base) => ({
      ...base,
      ...getFont(),
      color: theme.colors.foreground,
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: theme.colors.menuFill,
    }),
    option: (base) => ({
      ...base,
      ...getFont(),
      backgroundColor: "transparent",
      color: theme.colors.foreground,
      "&:hover": {
        backgroundColor: theme.colors.menuFillHover,
      },
    }),
    noOptionsMessage: (base) => ({
      ...base,
      ...getFont(),
    }),
    placeholder: (base) => {
      return {
        ...base,
        ...getFont(),
      };
    },
  };

  function DropdownIndicator(props) {
    return (
      <components.DropdownIndicator {...props}>
        <ChevronDown size={16} />
      </components.DropdownIndicator>
    );
  }

  return (
    <ReactSelect
      {...props}
      onChange={onChange}
      options={options}
      styles={styles}
      components={{ DropdownIndicator }}
    />
  );
}

Select.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
};

export default Select;
