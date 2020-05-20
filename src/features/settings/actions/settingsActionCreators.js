import { CHANGE_THEME } from "./settingsActionTypes";

function changeTheme(payload) {
  return {
    payload,
    type: CHANGE_THEME,
  };
}

export { changeTheme };
