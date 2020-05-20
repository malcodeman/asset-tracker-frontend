import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeTheme } from "../actions/settingsActionCreators";

import ThemesForm from "./ThemesForm";
import constants from "../../../constants";

function Themes() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.settings.theme);
  const themes = Object.values(constants.THEMES);

  function onSubmit(formik) {
    const payload = formik.values.theme;

    dispatch(changeTheme(payload));
  }

  return <ThemesForm theme={theme} themes={themes} onSubmit={onSubmit} />;
}

export default Themes;
